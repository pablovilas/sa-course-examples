const Router = require('koa-router');
const UserController = require('./userController');
const AuthController = require('./authController');

const router = new Router();
const auth = new AuthController();
const user = new UserController();

router.post('/login', (ctx, next) => auth.login(ctx, next));
router.get('/users', (ctx, next) => user.list(ctx, next));
router.post('/users', (ctx, next) => user.save(ctx, next));
router.get('/users/:id', (ctx, next) => user.fetch(ctx, next));

module.exports = router;