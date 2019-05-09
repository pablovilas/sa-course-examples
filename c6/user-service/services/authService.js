const Config = require('config');
const jwt = require('jsonwebtoken');

module.exports = class AuthService {
    login (data) {
        let credentials = Config.get('credentials');
        let validCredentials = credentials.clientId == data.clientId &&
            credentials.clientSecret == data.clientSecret;
        var token = null;
        if (validCredentials) {
            token = jwt.sign({ clientId: data.clientId }, credentials.secret);
        }
        return token;
    }
}