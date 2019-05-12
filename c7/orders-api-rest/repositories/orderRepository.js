const Repository = require('../repositories/repository');

module.exports = class OrderRepository {
    constructor() {
        this.orderRepository = Repository.Order;
    }
    async findAll(limit, offset) {
        var query = this.orderRepository.find();
        if (limit) {
            query.limit(limit);
        }
        if (offset) {
            query.skip(offset);
        }
        let orders = await query;
        return orders.map((order) => order.toObject());
    }
    async save(data) {
        let user = await this.orderRepository.create(data);
        return user.toObject();
    }
    async findById(id) {
        let order = await this.orderRepository.findOne({ _id: id });
        return order.toObject();
    }
}