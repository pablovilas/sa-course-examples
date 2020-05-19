module.exports = class OrderRepository {
    constructor() {
        this.orders = [];
    }
    async findAll(limit, offset) {
        console.log(this.orders);
        return this.orders.slice(offset, offset + limit);
    }
    async findById(id) {
        return this.orders.find(order => order.id == parseInt(id));
    }
    async save(order) {
        this.orders.push(order);
        return order;
    }
}