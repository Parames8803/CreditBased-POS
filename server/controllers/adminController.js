const User = require('../models/user');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.render('admin', { users });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
