const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true }, // 'Admin' or 'Student'
    points: { type: [{ x: Number, y: Number }], required: true },
    password: { type: String, required: true }, // Optional for extra security
});

module.exports = mongoose.model('User', userSchema);
