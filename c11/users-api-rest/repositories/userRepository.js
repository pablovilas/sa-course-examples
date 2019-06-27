const Repository = require('./repository');

module.exports = class UserRepository {
    constructor() {
        this.userRepository = Repository.User;
    }
    async findAll(limit, offset) {
        var query = this.userRepository.find();
        if (limit) {
            query.limit(limit);
        }
        if (offset) {
            query.skip(offset);
        }
        let users = await query;
        return users.map((user) => user.toObject());
    }
    async save(data) {
        let user = await this.userRepository.create(data);
        return user.toObject();
    }
    async findById(id) {
        try {
            let user = await this.userRepository.findOne({ _id: id });
            return user ? user.toObject() : null;
        } catch (err) {
            return null;
        }
    }
}