const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

// Register User
router.post('/register', async (req, res) => {
    const { email, role, points, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, role, points, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login User
router.post('/login', async (req, res) => {
    const { email, points, role } = req.body;
    try {
        const user = await User.findOne({ email, role });
        if (!user) return res.status(404).json({ message: 'User not found!' });

        const isPointsValid = validatePoints(user.points, points);
        if (!isPointsValid) return res.status(401).json({ message: 'Invalid points!' });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful!', token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Helper function to validate points
function validatePoints(storedPoints, inputPoints) {
    const tolerance = 10;
    if (storedPoints.length !== inputPoints.length) return false;
    return storedPoints.every((point, index) => {
        const dx = Math.abs(point.x - inputPoints[index].x);
        const dy = Math.abs(point.y - inputPoints[index].y);
        return dx <= tolerance && dy <= tolerance;
    });
}

module.exports = router;
