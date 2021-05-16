const authService = require('./auth.service');

exports.signin = (username) => authService.generateAccessToken(username);
