const User = require("../models/user.model");

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = await User.create({ name, email, password });

        await newUser.sendVerificationCode();

        res.status(201).json(newUser);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if(!user){
            return res.status(400).json({
                message: 'email or password is incorrect'
            });
        };

        const isPasswordValid = await user.comparePassword(password);

        if(!isPasswordValid){
            return res.status(400).json({
                message: 'email or password is incorrect'
            });
        };

        user.password = undefined;

        res.status(201).json(user);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

const verifyEmail = async (req, res) => {
    const { code } = req.body;

    const user = await User.findOne({ verificationCode: code });

    if(!user) {
        return res.status(400).json({
            message: 'Invalid verification code or user dont exist!'
        });
    }

    user.isVerified = true;
    user.verificationCode = undefined;

    await user.save();

    res.status(200).json({ message: 'Email verified successfully' });
}

module.exports = { register, login, verifyEmail };