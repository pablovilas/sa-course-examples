const OrderRepository = require('../repositories/orderRepository');

module.exports = class OrderService {
    constructor() {
        this.orderRepository = new OrderRepository();
    }
    async findAll(limit, offset) {
        return await this.orderRepository.findAll(limit, offset);
    }
    async save(data) {
        return await this.orderRepository.save(data);
    }
    async findById(id) {
        return await this.orderRepository.findById(id);
    }
}