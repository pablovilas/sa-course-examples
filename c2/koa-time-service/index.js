const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const json = require('koa-json');
const moment = require('moment-timezone');

const app = new Koa();
const router = new Router();


router.get('/', (ctx, next) => {
    let query = ctx.request.query;
    if (query && query.tz) {
        ctx.body = { time: moment().tz(query.tz).format().toString() };
    } else {
        ctx.status = 400;
        ctx.body = { code: 'Missing argument', description: 'The "tz" parameter is missing' };
    }
    next();
});

app.use(logger());
app.use(json({ pretty: true }));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);

console.log('Country service started!');
