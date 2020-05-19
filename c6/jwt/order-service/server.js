module.exports.initServer = async function () {
    const Koa = require('koa');
    const logger = require('koa-logger');
    const json = require('koa-json');
    const bodyParser = require('koa-bodyparser');
    const router = require('./controllers/router');
    const jwt = require('koa-jwt');
    const fs = require('fs');
    const publicKey = fs.readFileSync('./config/public.key', 'utf8');
    
    const app = new Koa();
    
    app.use(function (ctx, next) {
        return next().catch((err) => {
          if (err.status === 401) {
            ctx.status = 401;
            ctx.body = { status: 401, message: (err.originalError ? err.originalError.message : err.message) };
          } else {
            throw err;
          }
        });
    });
    app.use(jwt({ secret: publicKey, algorithms: ['RS256']}));
    app.use(logger());
    app.use(bodyParser());
    app.use(json({ pretty: true }));
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(8081);
    
    console.log(`Server started, see http://localhost:8081
        Endpoints:
            * GET  /orders
            * POST /orders
            * GET  /orders?limit=:limit&offset=:offeset
            * GET  /orders/:id`);
}