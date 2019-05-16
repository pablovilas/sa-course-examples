const Location = require('./location');

const User = {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
    location: Location
};

module.exports = User;