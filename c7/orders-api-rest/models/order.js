const OrderStatus = require('./orderStatus');

const Order = {
    status: { type: Number, enum: Object.values(OrderStatus), default: OrderStatus.PENDING },
    date: { type: String, default: Date.now(), required: true },
    notes: { type: String, required: false },
    total: { type: Number, required: true, min: 0 },
    items: [{
        name: { type: String, required: true },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true, min: 0 }
    }],
    customer: {
        name: { type: String, required: true },
        location: {
            latitude: { type: String, required: true },
            longitude: { type: String, required: true } 
        }
    },
    business: {
        name: { type: String, required: true },
        location: {
            latitude: { type: String, required: true },
            longitude: { type: String, required: true }
        }
    }
};

module.exports = Order;