const Router = require('koa-router');
const UserController = require('./userController');
const SwaggerController = require('./swaggerController');

const router = new Router();
const swagger = new SwaggerController();
const user = new UserController();

router.get('/swagger.json', (ctx, next) => swagger.fetch(ctx, next));
router.get('/users', (ctx, next) => user.list(ctx, next));
router.post('/users', (ctx, next) => user.save(ctx, next));
router.get('/users/:id', (ctx, next) => user.fetch(ctx, next));

module.exports = router;