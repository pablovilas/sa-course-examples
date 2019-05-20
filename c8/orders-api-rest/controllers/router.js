const Router = require('koa-router');
const OrderController = require('./orderController');

const router = new Router();
const order = new OrderController();

router.get('/orders', (ctx, next) => order.list(ctx, next));
router.post('/orders', (ctx, next) => order.save(ctx, next));
router.get('/orders/:id', (ctx, next) => order.fetch(ctx, next));

module.exports = router;