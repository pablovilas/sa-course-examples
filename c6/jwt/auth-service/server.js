module.exports.initServer = async function () {
    const Config = require('config');
    const Koa = require('koa');
    const logger = require('koa-logger');
    const json = require('koa-json');
    const bodyParser = require('koa-bodyparser');
    const router = require('./controllers/router');
    
    const app = new Koa();
    
    app.use(logger());
    app.use(bodyParser());
    app.use(json({ pretty: true }));
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(8080);
    
    console.log(`Server started, see http://localhost:8080
        Endpoints:
            * POST /login`
    );
}