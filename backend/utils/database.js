// Include Sequelize module
const Sequelize = require('sequelize')

// Creating new Object of Sequelize
const sequelize = new Sequelize(
    'jiyoonk2_survey',
    'jiyoonk2_b4d7_cg',
    '^cs@4p[Tqmp_', {

        // Explicitly specifying
        // mysql database
        dialect: 'mysql',

        // By default host is 'localhost'
        host: '162.241.225.39'
    }
);

// Exporting the sequelize object.
// We can use it in another file
// for creating models
module.exports = sequelize