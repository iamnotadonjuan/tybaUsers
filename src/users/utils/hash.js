const bcrypt = require('bcrypt');

exports.hash = async (plainText, saltRounds = 10) => {
  return new Promise((resolve, _reject) => bcrypt.hash(plainText, saltRounds, (_err, hash) => resolve(hash)));
}

exports.compare = async (currentPassword, hashedPassword) => {
  return new Promise((resolve, _reject) => bcrypt.compare(currentPassword, hashedPassword, (_err, result) => resolve(result)));
}
