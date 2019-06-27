module.exports.init = function () {
    const Config = require('config');
    const Koa = require('koa');
    const logger = require('koa-logger');
    const xmlParser = require('koa-xml-body');
    const bodyParser = require('koa-bodyparser');
    const respond = require('./middlewares/respond');
    const router = require('./controllers/router');
    const argv = require('minimist')(process.argv.slice(2));
    
    const app = new Koa();
    const port = argv.port ? parseInt(argv.port) : 8080;
    
    app.use(logger());
    app.use(xmlParser(Config.get('middlewares.xmlParser')));
    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.use(respond());
    return app.listen(port);
}