const convert = require('xml-js');

module.exports = () => { return async (ctx, next) => {
    await next();
    const body = ctx.body;
    switch (ctx.accepts('json', 'xml')) {
        case 'json': 
            ctx.response.type = 'json';
            ctx.body = JSON.stringify(body);
        break;
        case 'xml':
            ctx.response.type = 'xml';
            ctx.body = convert.js2xml(body, { compact: true });
        break;
        default: ctx.throw(406, 'json, html, or text only');
    }
}};