var config = require('config');

function deferBinding(repositoryName) {
    let type = config.get('repository.type') || 'memory';
    let implementation = require(`./${repositoryName}${capitalize(type)}Repository`);
    return implementation;
}

function capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = deferBinding;