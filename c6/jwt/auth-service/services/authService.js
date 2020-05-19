const Config = require('config');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const secretKey = fs.readFileSync('./config/private.key', 'utf8');

const signOptions = {
 expiresIn: "12h",
 algorithm: "RS256"
};

module.exports = class AuthService {
    login (data) {
        let credentials = Config.get('credentials');
        let validCredentials = credentials.clientId == data.clientId &&
            credentials.clientSecret == data.clientSecret;
        var token = null;
        if (validCredentials) {
            token = jwt.sign({ client: data.clientId, permissions: credentials.permissions.join(",") }, secretKey, signOptions);
        }
        return token;
    }
}