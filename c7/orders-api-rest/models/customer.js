const Location = require('./location');

const Customer = {
    _id: false,
    name: { type: String, required: true },
    location: Location
};
module.exports = Customer;