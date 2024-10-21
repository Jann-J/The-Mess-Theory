const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Register a student
router.post('/register', async (req, res) => {
  const { name, mis, phone, email, year, password } = req.body;

  try {
    // Check if the user already exists by email or MIS
    const userExists = await User.findOne({ $or: [{ email }, { mis }] });
    if (userExists) {
      return res.status(400).json({ message: 'User with this email or MIS ID already exists' });
    }

    // Only allow registration as a student
    const user = new User({
      name,
      mis,
      phone,
      email,
      year,
      password,
      role: 'student'  // Always set the role to student for this route
    });

    await user.save();

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;