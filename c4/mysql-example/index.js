// Documentation about Sequelize: http://docs.sequelizejs.com/manual/getting-started.html

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/userDb');

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

(async () => {
    await sequelize.sync();
    let user = await User.create({
        firstName: 'Jhon',
        lastName: 'Doe',
        email: 'example@example.com'
    });
    console.log(user.toJSON());
})();