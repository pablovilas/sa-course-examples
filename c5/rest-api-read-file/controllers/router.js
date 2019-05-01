const Router = require('koa-router');
const UserController = require('./userController');

const router = new Router();
const user = new UserController();

router.get('/users', (ctx, next) => user.list(ctx, next));
router.get('/users/:id', (ctx, next) => user.fetch(ctx, next));

module.exports = router;