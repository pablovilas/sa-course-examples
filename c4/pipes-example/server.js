const process = require('process');
const path = require('path');

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const Queue = require('bull');

const app = new Koa();

const serverPort = 3000;

const heavyQueue = new Queue('heavy');
const dataQueue = new Queue('data');

heavyQueue.process(2, path.resolve(process.cwd(), 'filters/heavy', 'port.js'));
dataQueue.process(2, path.resolve(process.cwd(), 'filters/data', 'port.js'));

// heavyQueue.process(heavyFilter);

heavyQueue.on('completed', function(job, result) {
  console.info(`HEAVY: Job ${job.id} Processed`);

  dataQueue.add(result);
});

dataQueue.on('completed', function(job, result) {
  console.info(`DATA: Job ${job.id} Processed`);
  console.info(`DATA: Data Stored: ${JSON.stringify(result)}`);
});

app.use(bodyParser());

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

async function handleRequest(ctx) {
  heavyQueue.add(ctx.request.body);

  ctx.body = 'Hola!';
}

// Async/Await - Promises
//
app.use(handleRequest);

app.listen(serverPort);

console.log(`INFO: Servidor escuchando en ${serverPort}`);
