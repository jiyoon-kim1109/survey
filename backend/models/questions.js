const Sequelize = require('sequelize');

const sequelize = require('../utils/database');
const QuestionOption = require("./question_options");
const Answer = require("./answers");

const Question = sequelize.define('question', {
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
    survey_id: {type: Sequelize.INTEGER, allowNull: false},
    content: {type: Sequelize.STRING, allowNull: false},
    type: {type: Sequelize.STRING, allowNull: false}
})
Question.hasMany(QuestionOption, {
    foreignKey: 'question_id'
});
Question.hasMany(Answer, {
    foreignKey: 'question_id'
});
module.exports = Question