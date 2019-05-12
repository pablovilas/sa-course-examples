const Location = require('./location');

const Business = {
    name: { type: String, required: true },
    location: Location
};
module.exports = Business;