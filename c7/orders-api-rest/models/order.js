const OrderStatus = require('./orderStatus');
const Item = require('./item');
const Customer = require('./customer');
const Business = require('./business');

const Order = {
    status: { type: Number, enum: Object.values(OrderStatus), default: OrderStatus.PENDING },
    date: { type: String, default: Date.now(), required: true },
    notes: { type: String, required: false },
    total: { type: Number, required: true, min: 0 },
    items: [Item],
    customer: Customer,
    business: Business
};

module.exports = Order;