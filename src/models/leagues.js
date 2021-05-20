const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbConnect');

const Leagues = sequelize.define('league', {
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

module.exports = Leagues;