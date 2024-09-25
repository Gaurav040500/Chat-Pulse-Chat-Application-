const express = require('express');
const { User } = require('../Schema/UserSchema.js');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 }); 
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
