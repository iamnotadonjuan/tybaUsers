const BaseRepository = require('../repositories/base.repository');
const User = require('../models/user.model');

class UserRepository extends BaseRepository {
  constructor() {
    super();
    super.createConnection();
  }

  async createUser(user) {
    return User.create(user);
  }

  async findUser(username) {
    return User.findOne({ where: { username } });
  }
}

module.exports = UserRepository;
