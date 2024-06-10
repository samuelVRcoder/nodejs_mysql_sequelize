const Sequelize = require('sequelize');
const sequelize = new Sequelize('db', 'user', 'password', {dialect: 'mysql', host: 'host'})
module.exports = sequelize;