const authService = require('./auth.service');
const UserRepository = require('../repositories/user.repository');
const { hash, compare } = require('../utils/hash');


exports.signin = async (user) => {
  const User = new UserRepository();
  const passwordHashed = await hash(user.password);
  user.password = await passwordHashed;
  await User.createUser(user);
  return authService.generateAccessToken(user);
};

exports.login = async (user) => {
  const User = new UserRepository();
  const userFound = await User.findUser(user.username);
  const result = await compare(user.password, userFound.password);
  if (!result) {
    throw new Error('INVALID PASSWORD');
  } 
  return authService.generateAccessToken(user);
};
