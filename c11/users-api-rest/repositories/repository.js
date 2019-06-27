const Config = require('config');
const mongoose = require('mongoose');
const User = require('../models/user');
const Schema = mongoose.Schema;

module.exports = class Repository {
    constructor() {
        this.connection = null;
    }
    static async connect() {
        this.connection = await mongoose.connect(this.getUrl(), { useNewUrlParser: true });
    }
    static async loadCollections() {
        const userSchema = new Schema(User, { id: false });
        userSchema.set('toObject', {
            transform: function (doc, ret) {
                ret.id = ret._id.toString();
                delete ret._id;
                delete ret.__v;
            }
        });
        module.exports.User = this.connection.model('User', userSchema);
    }
    static getUrl() {
        let connectionUrl = Config.get('repository.url');
        return connectionUrl;
    }
    static async initRepository() {
        try {
            await this.connect();
            await this.loadCollections();
        } catch (err) {
            console.log(`Error trying to connect to database: ${err}`);
        }
    }
}