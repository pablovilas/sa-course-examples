const OrderStatus = require('./orderStatus');

const Order = (schema, types) =>  { 
    return schema.define('order', {
        status: { type: types.INTEGER, validate: { len: Object.values(OrderStatus) }, defaultValue: OrderStatus.PENDING },
        date: { type: types.DATE, defaultValue: types.NOW, allowNull: false },
        notes: { type: types.TEXT, allowNull: true },
        total: { type: types.FLOAT, allowNull: false, validation: { min: 0 } },
        // items: [Item],
        // customer: Customer,
        // business: Business
    });
};

module.exports = Order;