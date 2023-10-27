const User = require('../models/user');

exports.getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.render('user', { user });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.post = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user.creditPoints < 50) {
      res.json({ status: 'low_credit' });
    } else {
      user.creditPoints -= 50;
      await user.save();
      res.json({ status: 'success', creditPoints: user.creditPoints });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.upgrade = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user.status === 'free') {
      user.status = 'paid';
      user.creditPoints = 500;
      await user.save();
    } else {
      user.creditPoints = 500;
      await user.save();
    }
    res.json({ status: 'success', creditPoints: user.creditPoints });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
