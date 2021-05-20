const { DataTypes } = require("sequelize");
const sequelize = require('../services/dbConnect');

const Scores = sequelize.define('score', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    score_count: {
        type: DataTypes.FLOAT,
        allowNull: true
    }
});

module.exports = Scores;
