module.exports = class UserRepository {
    constructor() {
        this.users = [
            { 
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@doe.com'
            }
        ];
    }
    async findAll(limit, offset) {
        return this.users;
    }
    async save(user) {
        this.users.push(user)
        return user;
    }
    async findById(id) {
        return this.users[id - 1];
    }
}