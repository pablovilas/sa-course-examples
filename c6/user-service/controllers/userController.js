const UserService = require('../services/userService');

module.exports = class UserController {
    constructor() {
        this.userService = new UserService();
    }
    async list (ctx, next) {
        let limit = parseInt(ctx.query.limit) || 100;
        let offset = parseInt(ctx.query.offset) || 0;
        let list = (await this.userService.findAll(limit, offset)) || [];
        ctx.body = { offset: offset, limit: limit, size: list.length, data: list };
        await next();
    }
    async save (ctx, next) {
        let data = ctx.request.body;
        let user = await this.userService.save(data);
        if (user) {
            ctx.body = user;
        } else {
            ctx.status = 400;
            ctx.body = { status: 400, message: `Invalid User data` };
        }
        await next();
    }
    async fetch (ctx, next) {
        let id = parseInt(ctx.params.id);
        let user = await this.userService.findById(id);
        if (user) {
            ctx.body = user;
        } else {
            ctx.status = 404;
            ctx.body = { status: 404, message: `User #${id} not found` };
        }
        await next();
    }
}