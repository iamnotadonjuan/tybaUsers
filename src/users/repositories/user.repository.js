const BaseRepository = require('../repositories/base.repository');
const User = require('../models/user.model');

class UserRepository extends BaseRepository {
  constructor() {
    super();
    super.createConnection();
  }

  async createUser(user) {
    const userCreated = await User.create(user);
    super.closeConnection();
    return userCreated;
  }

  async findUser(username) {
    const userFound = User.findOne({ where: { username } });
    super.closeConnection();
    return userFound;
  }
}

module.exports = UserRepository;
