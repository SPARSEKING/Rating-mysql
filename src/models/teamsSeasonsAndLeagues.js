const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbConnect');

const TeamsSeasonsAndLeagues = sequelize.define('relteams', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    teams_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rel_seasons_leagues_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = TeamsSeasonsAndLeagues;