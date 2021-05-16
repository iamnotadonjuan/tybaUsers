const jwt = require('jsonwebtoken');

exports.generateAccessToken = (username) => jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: 1800 });
