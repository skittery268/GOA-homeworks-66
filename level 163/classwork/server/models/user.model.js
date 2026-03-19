const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const sendMail = require('../utils/email');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Fullname is required!"]
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        unique: [true, "Email is already registered!"]
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        minlength: [6, "Password length must be at least 6 characters!"]
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

userSchema.pre('save', async function() {
    if(!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function(candidate) {
    return await bcrypt.compare(candidate, this.password);
};

userSchema.methods.sendVerificationLink = async function() {
    const token = jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

    const link = `http://localhost:3000/api/auth/verify?token=${token}`;

    const html = `
        <h1>Verify your email</h1>
        <a href="${link}">Click here to verify your email</a>
    `

    sendMail(this.email, "Verification code", html);
}

const User = mongoose.model('User', userSchema);

module.exports = User;