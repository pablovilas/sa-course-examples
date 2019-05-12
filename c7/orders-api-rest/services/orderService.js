const Repository = require('../repositories/repository');

module.exports = class OrderService {
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
        return await query;
    }
    async save(user) {
        return await this.orderRepository.create(user);
    }
    async findById(id) {
        return await this.orderRepository.findOne({ _id: id });
    }
}