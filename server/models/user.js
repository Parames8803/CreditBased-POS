const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  status: {
    type: Sequelize.ENUM('free', 'paid'),
    defaultValue: 'free',
  },
  creditPoints: {
    type: Sequelize.INTEGER,
    defaultValue: 100,
  },
});

module.exports = User;
