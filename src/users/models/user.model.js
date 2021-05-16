const { Model, DataTypes } = require('sequelize');
const BaseRepository = require('../repositories/base.repository');
const sequelize = new BaseRepository().getConnection();

const User = sequelize.define('Users', {
  username: DataTypes.STRING(100),
  password: DataTypes.STRING(255),
  status: {
    type: DataTypes.INTEGER(2),
    default: 1
  }
});

module.exports = User;
