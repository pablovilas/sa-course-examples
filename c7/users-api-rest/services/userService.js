const UserRepository = require('../repositories/userRepository');

module.exports = class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }
    async findAll(limit, offset) {
        return await this.userRepository.findAll(limit, offset);
    }
    async save(data) {
        return await this.userRepository.save(data);
    }
    async findById(id) {
        return await this.userRepository.findById(id);
    }
}