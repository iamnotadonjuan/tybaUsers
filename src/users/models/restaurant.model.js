const { Model, DataTypes } = require('sequelize');
const BaseRepository = require('../repositories/base.repository');
const sequelize = new BaseRepository().getConnection();

const Restaurant = sequelize.define('Restaurants', {
  name: DataTypes.STRING(100),
  location: DataTypes.GEOMETRY('POINT'),
  userId: DataTypes.INTEGER,
  status: DataTypes.INTEGER(2)
});

module.exports = Restaurant;
