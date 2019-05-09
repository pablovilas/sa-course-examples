 const Repository = require('../repositories/repository');

 module.exports = class UserService {
    constructor() {
        this.userRepository = Repository.User;
    }
    isValid(user) {
        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        let validFirstName = (user.firstName && user.firstName !== '');
        let validLastName = (user.lastName && user.lastName !== '');
        let validEmail = (user.email && validateEmail(user.email));

        return validFirstName && validLastName && validEmail;
    }
    async findAll(limit, offset) {
        return await this.userRepository.find({
            skip: offset,
            limit: limit
        });
    }
    async save(user) {
        if (this.isValid(user)) {
            return await this.userRepository.create(user).fetch();
        } else {
            return null;
        }
    }
    async findById(id) {
        return await this.userRepository.findOne({id: id});
    }
}