const AuthService = require('../services/authService');

module.exports = class AuthController {
    constructor() {
        this.authService = new AuthService();
    }
    async login (ctx, next) {
        let data = ctx.request.body;
        let token = await this.authService.login(data);
        if (token) {
            ctx.body = { token: token };
        } else {
            ctx.status = 401;
            ctx.body = { status: 401, message: 'Unauthorized' };
        }
        await next();
    }
}