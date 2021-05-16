const express = require('express');
const router = express.Router();

const userController = require('../controllers');

/* GET users listing. */
router.post('/sigin', userController.signin);

router.post('/login', userController.login);

router.post('/logout', userController.logout);

module.exports = router;
