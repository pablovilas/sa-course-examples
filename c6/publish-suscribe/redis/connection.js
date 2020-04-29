const redis = require('redis');

module.exports = class Connection {
    static connect() {
        return redis.createClient();
    }
}