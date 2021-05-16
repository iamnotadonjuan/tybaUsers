const BaseRepository = require('../repositories/base.repository');
const User = require('../models/user.model');

class UserRepository extends BaseRepository {
  constructor() {
    super();
    super.createConnection();
  }
}