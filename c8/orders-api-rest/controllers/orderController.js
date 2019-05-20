const OrderService = require('../services/orderService');

module.exports = class OrderController {
    constructor() {
        this.orderService = new OrderService();
    }
    async list (ctx, next) {
        let limit = parseInt(ctx.query.limit) || 100;
        let offset = parseInt(ctx.query.offset) || 0;
        let list = (await this.orderService.findAll(limit, offset)) || [];
        ctx.body = { offset: offset, limit: limit, size: list.length, data: list };
        await next();
    }
    async save (ctx, next) {
        let data = ctx.request.body;
        let user = await this.orderService.save(data);
        if (user) {
            ctx.body = user;
        } else {
            ctx.status = 400;
            ctx.body = { status: 400, message: `Invalid Order data` };
        }
        await next();
    }
    async fetch (ctx, next) {
        let id = ctx.params.id;
        let user = await this.orderService.findById(id);
        if (user) {
            ctx.body = user;
        } else {
            ctx.status = 404;
            ctx.body = { status: 404, message: `Order #${id} not found` };
        }
        await next();
    }
}