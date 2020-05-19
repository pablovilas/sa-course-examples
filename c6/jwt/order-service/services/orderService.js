 const OrderRepository = require('../repositories/orderRepository.js');

 module.exports = class UserService {
    constructor() {
        this.orderRepository = new OrderRepository();
    }
    async findAll(limit, offset) {
        return await this.orderRepository.findAll(limit, offset);
    }
    async save(order) {
        return await this.orderRepository.save(order);
    }
    async findById(id) {
        return await this.orderRepository.findById(id);
    }
}