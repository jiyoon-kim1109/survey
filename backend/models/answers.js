const Sequelize = require('sequelize');

const sequelize = require('../utils/database')

const Answer = sequelize.define('answer', {
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
    question_option_id: {type: Sequelize.INTEGER, allowNull: false},
    answer_numeric: {type: Sequelize.INTEGER, allowNull: true},
    answer_text: {type: Sequelize.STRING, allowNull: true},
    answer_yn: {type: Sequelize.BOOLEAN, allowNull: true}
})

module.exports = Answer