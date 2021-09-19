const Sequelize = require('sequelize');

const sequelize = require('../utils/database')
const User = require("./users");
const Question = require("./questions");

const Survey = sequelize.define('survey', {
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
    user_id: {type: Sequelize.INTEGER, allowNull: true},
    title: {type: Sequelize.STRING, allowNull: false},
    description: {type: Sequelize.STRING, allowNull: false},
    start_date: {type: Sequelize.STRING, allowNull: false},
    end_date: {type: Sequelize.STRING, allowNull: false},
    main_image: {type: Sequelize.STRING, allowNull: false}
})
// Survey.hasOne(User, {
//     foreignKey: 'user_id'
// });
// User.belongsTo(Survey);

Survey.hasMany(Question, {
    foreignKey: 'survey_id'
});
// Question.belongsTo(Survey);

module.exports = Survey