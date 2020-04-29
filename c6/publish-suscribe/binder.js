var config = require('config');

module.exports = function bind(type) {
    let backend = config.get('backend') || 'local';
    let implementation;
    try {
        implementation = require(`./${backend}/${type}`);
    } catch (err) {
        // Use default implementation
        implementation = require(`./local/${type}`);
    }
    return implementation;
}