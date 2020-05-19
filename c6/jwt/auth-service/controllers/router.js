const Router = require('koa-router');
const AuthController = require('./authController');

const router = new Router();
const auth = new AuthController();

router.post('/login', (ctx, next) => auth.login(ctx, next));

module.exports = router;