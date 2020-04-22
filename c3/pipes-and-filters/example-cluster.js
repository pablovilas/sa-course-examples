const Pipeline = require('./pipeline/pipeline');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

var filterMultiply = (input, next) => {
    let result = input * input;
    next(null, result);
};
var filterPrint = (input, next) => {
    console.log(`Result from filter is ${input}`);
    next(null, input);
};

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    var pipeline = new Pipeline();
    pipeline.use(filterMultiply);
    pipeline.use(filterPrint);
    pipeline.run(Math.random());
    pipeline.on('error', (err) => {
        console.log(`The error is ${err}`);
    });
    pipeline.on('end', (result) => {
        console.log(`The result is ${result}`);
    });
    console.log(`Worker ${process.pid} started`);
}