var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Character = sequelize.define("character", {
    routeName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    forcePoints: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});


Character.sync();

module.exports = Character;