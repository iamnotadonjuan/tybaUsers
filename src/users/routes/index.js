const express = require('express');
const router = express.Router();

const userController = require('../controllers');
const authMiddleware = require('../../../middlewares/auth.middleware');

router.post('/signin', userController.signin);

router.post('/login', userController.login);

router.post('/logout', authMiddleware.authToken, userController.logout);

module.exports = router;
