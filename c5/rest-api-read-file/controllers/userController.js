const UserService = require('../services/userService');

module.exports = class UserController {
    constructor() {
        this.userService = new UserService();
    }
    async list (ctx, next) {
        let limit = parseInt(ctx.query.limit) || 100;
        let offset = parseInt(ctx.query.offset) || 0;
        let list = await this.userService.findAll(limit, offset);
        ctx.body = { offset: offset, limit: limit, size: list.length, data: list };
        await next();
    }
    async fetch (ctx, next) {
        let user = await this.userService.findById(ctx.params.id);
        ctx.body = user;
        await next();
    }
}