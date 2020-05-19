const OrderService = require('../services/orderService');

module.exports = class OrderController {
    constructor() {
        this.orderService = new OrderService();
    }
    async list (ctx, next) {
        if (this.hasPermission(ctx, '/order/read')) {
            let limit = parseInt(ctx.query.limit) || 100;
            let offset = parseInt(ctx.query.offset) || 0;
            let list = (await this.orderService.findAll(limit, offset)) || [];
            ctx.body = { offset: offset, limit: limit, size: list.length, data: list };
        } else {
            ctx.status = 403;
            ctx.body = { status: 403, message: 'Forbidden' };
        }
        await next();
    }
    async save (ctx, next) {
        if (this.hasPermission(ctx, '/order/write')) {
            let data = ctx.request.body;
            let order = await this.orderService.save(data);
            if (order) {
                ctx.body = order;
            } else {
                ctx.status = 400;
                ctx.body = { status: 400, message: `Invalid Order data` };
            }
        } else {
            ctx.status = 403;
            ctx.body = { status: 403, message: 'Forbidden' };
        }
        await next();
    }
    async fetch (ctx, next) {
        if (this.hasPermission(ctx, '/order/read')) {
            let id = parseInt(ctx.params.id);
            let order = await this.orderService.findById(id);
            if (order) {
                ctx.body = order;
            } else {
                ctx.status = 404;
                ctx.body = { status: 404, message: `Order #${id} not found` };
            }
        } else {
            ctx.status = 403;
            ctx.body = { status: 403, message: 'Forbidden' };
        }
        await next();
    }
    hasPermission(ctx, permission) {
        let data = ctx.state.user;
        let permissions = data.permissions.split(',');
        return permissions.includes(permission);
    }
}