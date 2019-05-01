const UserRepository = require('./userRespository');
const FileReader = require('../utils/fileReader');
const User = require('../models/user');

module.exports = class UserMemoryRepository extends UserRepository {
    constructor() {
        super();
        this.users = [];
        load(this.users);
    }
    async findAll(limit, offset) {
        return this.users.slice(offset, offset + limit);
    }
    async findById(id) {
        return this.users[id - 1];
    }
}

async function load(output) {
    try {
        const result = await FileReader.readCVS('./data/hw_25000.csv');
        convertToModel(result, output);
    } catch (err) {
        console.log(`Error while loading data file: ${err}`);
    }
}

function convertToModel(input, output) {
    input.shift(); // Remove CSV headers
    for (item of input) {
        let id = parseInt(item[0]);
        let height = parseFloat(item[1]);
        let weight = parseFloat(item[2]);
        output.push(new User(id, height, weight));
    }
}