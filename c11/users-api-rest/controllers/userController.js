const UserService = require('../services/userService');

/**
 * @swagger
 *
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - firstName
 *       - lastName
 *       - email
 *     properties:
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       email:
 *         type: string
 *         format: email 
 */
module.exports = class UserController {
    constructor() {
        this.userService = new UserService();
    }
    /**
     * @swagger
     * /users:
     *   get:
     *     description: Returns users
     *     produces:
     *      - application/json
     *     responses:
     *       200:
     *         description: users
     *         schema:
     *           type: array
     *           items:
     *             $ref: '#/definitions/User'
     */
    async list (ctx, next) {
        let limit = parseInt(ctx.query.limit) || 100;
        let offset = parseInt(ctx.query.offset) || 0;
        let list = (await this.userService.findAll(limit, offset)) || [];
        ctx.body = { offset: offset, limit: limit, size: list.length, data: list };
        await next();
    }

    /**
     * @swagger
     *
     * /users:
     *   post:
     *     description: Creates a user
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: user
     *         description: User object
     *         in:  body
     *         required: true
     *         type: string
     *         schema:
     *           $ref: '#/definitions/User'
     *     responses:
     *       200:
     *         description: users
     *         schema:
     *           $ref: '#/definitions/User'
     */
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
        let id = ctx.params.id;
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