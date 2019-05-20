const Repository = require('../repositories/repository');

module.exports = class OrderRepository {
    constructor() {
        this.orderRepository = Repository.Order;
        this.relations = ['items', 'business', 'customer'];
    }
    async findAll(limit, offset) {
        var query = { include: this.relations };
        if (limit) {
            query.limit = limit;
        }
        if (offset) {
            query.skip = offset;
        }
        let orders = await this.orderRepository.findAll(query);
        return orders;
    }
    async save(data) {
        let user = await this.orderRepository.create(data, { include: this.relations });
        return user;
    }
    async findById(id) {
        try {
            let order = await this.orderRepository.findOne({ id: id, include: this.relations });
            return order;
        } catch (err) {
            return null;
        }
    }
}