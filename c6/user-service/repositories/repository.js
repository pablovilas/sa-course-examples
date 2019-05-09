const Config = require('config');
const Waterline = require('waterline');
const UserModel = require('../models/user');

module.exports = class Repository {
    static loadCollections() {
        const waterline = new Waterline();
        const userCollection = Waterline.Collection.extend(UserModel);
        waterline.registerModel(userCollection);
        return waterline;
    }
    static getConfig() {
        let adapterType = Config.get('repository.type') || 'disk';
        const adapter = require(`sails-${adapterType}`);
        return {
            adapters: {
                [adapterType]: adapter
            },
            datastores: {
                default: {
                    adapter: adapterType,
                    url: 'mongodb://localhost:27017/userDb'
                }
            }
        };
    }
    static async initRepository() {
        let db = this.loadCollections();
        let config = this.getConfig();
        return new Promise((resolve, reject) => {
            db.initialize(config, (err, repository) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    module.exports.User = repository.collections.user;
                    resolve();
                }
            });
        });
    }
}