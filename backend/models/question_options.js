const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const QuestionOption = sequelize.define('question_option', {
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
    question_id: {type: Sequelize.INTEGER, allowNull: false},
    name: {type: Sequelize.STRING, allowNull: false},
    order: {type: Sequelize.INTEGER, allowNull: false}
})

module.exports = QuestionOption