// Documentation about Sequelize: http://docs.sequelizejs.com/manual/getting-started.html

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:123arq@localhost:3306/arq_soft');

class User extends Sequelize.Model {
    static start() {
        let attribues = {
            firstName: Sequelize.STRING,
            lastName: Sequelize.STRING,
            email: Sequelize.STRING
        };
        let options = {
            sequelize,
            modelName: 'user'
        };
        this.init(attribues, options);
    }
}

User.start();

module.exports = function(data) {
  console.log(`DATA: with data: ${JSON.stringify(data)}`);

  return sequelize
    .sync()
    .then(() => User.create(data));
}
