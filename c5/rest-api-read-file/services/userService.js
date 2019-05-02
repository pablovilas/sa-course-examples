const UserRepository = require('../repositories/repository')('user');

module.exports = class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }
    async findAll(limit, offset) {
        return await this.userRepository.findAll(limit, offset);
    }
    async findById(id) {
        return await this.userRepository.findById(id);
    }
}