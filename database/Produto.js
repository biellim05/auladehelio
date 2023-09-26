const Sequelize = require('sequelize');
const connection = require("./database");

const produto = connection
.define('produto', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

produto.sync({force: false});

module.exports = produto;
