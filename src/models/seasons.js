const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbConnect');

const Seasons = sequelize.define('season', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sort: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

module.exports = Seasons;
