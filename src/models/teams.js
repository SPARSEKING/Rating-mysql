const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbConnect');

const Teams = sequelize.define('team', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Teams;