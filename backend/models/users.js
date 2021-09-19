const Sequelize = require('sequelize');

const sequelize = require('../utils/database')

const User = sequelize.define('user', {
    id: {

        // Sequelize module has INTEGER Data_Type.
        type: Sequelize.INTEGER,

        // To increment user_id automatically.
        autoIncrement: true,

        // user_id can not be null.
        allowNull: false,

        // For uniquely identify user.
        primaryKey: true
    },
    email: {type: Sequelize.STRING, allowNull: false},
    nickname: {type: Sequelize.STRING, allowNull: false},
    password: {type: Sequelize.STRING, allowNull: false}
})

module.exports = User