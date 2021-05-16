const userService = require('../services/user.service')

exports.signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ message: 'INVALID_PARAMS' });
    const token = await userService.signin({ username, password });
    return res.status(200).json({
      message: 'token success',
      data: token
    });
  } catch (error) {
    console.error(error);
  }
}

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ message: 'INVALID_PARAMS' });
    await userService.login({ username, password });
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    console.error(error);
  }
}

exports.logout = async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error);
  }
}
