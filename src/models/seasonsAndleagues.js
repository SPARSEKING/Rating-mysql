const { DataTypes } = require('sequelize');
const sequelize = require('../services/dbConnect');

const SeasonsAndLeagues = sequelize.define('rel_seasons_league', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    seasons_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    leagues_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = SeasonsAndLeagues;