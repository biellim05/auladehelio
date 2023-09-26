const Sequelize = require("sequelize");

const connection = new Sequelize('gabriel_05', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;