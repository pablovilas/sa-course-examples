const convert = require('xml-js');

module.exports = () => { return async (ctx, next) => {
    await next();
    switch (ctx.accepts('json', 'xml')) {
        case 'json': 
            renderJSON(ctx);
            break;
        case 'xml':
            renderXML(ctx);
            break;
        default: 
            renderJSON(ctx);
            break;
    }
}};

function renderJSON(ctx) {
    let body = ctx.body;
    ctx.response.type = 'json';
    ctx.body = JSON.stringify(body);
}

function renderXML(ctx) {
    let body = ctx.body;
    ctx.response.type = 'xml';
    ctx.body = convert.js2xml(body, { compact: true });
}