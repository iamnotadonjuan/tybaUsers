const { Sequelize } = require('sequelize');

module.exports = class BaseRepository {
  constructor() {
    if (!this.sequelize) {
      this.createConnection();
    }
  }

  createConnection() {
    this.sequelize = new Sequelize({
      host: process.env.DATABASE_HOST || 'localhost',
      username: process.env.DATABASE_USERNAME || 'root',
      port: process.env.DATABASE_PORT || '3306',
      password: process.env.DATABASE_PASSWORD || 'admin',
      database: process.env.DATABASE_NAME || 'tybatest',
      dialect: 'mysql'
    });
  }

  getConnection() {
    return this.sequelize;
  }

  closeConnection() {
    if (this.sequelize) {
      this.sequelize.close();
      console.log('connection has been close!');
    }
  }
}