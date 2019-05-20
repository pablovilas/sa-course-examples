const Config = require('config');
const Sequelize = require('sequelize');
const OrderModel = require('../models/order');
const BusinessModel = require('../models/business');
const CustomerModel = require('../models/customer');
const ItemModel = require('../models/item');

module.exports = class Repository {
    constructor() {
        this.connection = null;
    }
    static async connect() {
        const credentials = Config.get('repository');
        this.connection = new Sequelize(credentials.database, 
            credentials.user, credentials.password, credentials.options);
    }
    static async loadModels() {
        const Order = OrderModel(this.connection, Sequelize);
        const Business = BusinessModel(this.connection, Sequelize);
        const Customer = CustomerModel(this.connection, Sequelize);
        const Item = ItemModel(this.connection, Sequelize);

        Item.belongsTo(Order);
        Order.hasMany(Item, { as: 'items' });
        Order.hasOne(Business, { as: 'business', foreignKey: 'orderId' });
        Order.hasOne(Customer, { as: 'customer', foreignKey: 'orderId' });


        module.exports.Order = Order;
        module.exports.Business = Business;
        module.exports.Customer = Customer;
        module.exports.Item = Item;

        return this.connection.sync();
    }
    static async initRepository() {
        try {
            await this.connect();
            await this.loadModels();
        } catch (err) {
            console.log(`Error trying to connect to database: ${err}`);
            throw err;
        }
    }
}