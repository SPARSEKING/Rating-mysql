const { Sequelize } = require("sequelize");

const DB_NAME = process.env.DB_NAME;
const MYSQL_ROOT_NAME = process.env.DB_ROOT_NAME;
const MYSQL_ROOT_PASSWORD = process.env.DB_PASSWORD;
const MYSQL_HOSTNAME = process.env.DB_HOSTNAME;
const sequelize = new Sequelize(DB_NAME, MYSQL_ROOT_NAME, MYSQL_ROOT_PASSWORD, {
    dialect: "mysql",
    host: MYSQL_HOSTNAME,
    define: {
        timestamps: false
    }
});

module.exports = sequelize;