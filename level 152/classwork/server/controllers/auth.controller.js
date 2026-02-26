const User = require("../models/user.model");

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = await User.create({ name, email, password });

        res.status(201).json(newUser);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password });

        if(!user) {
            return res.status(401).json({message: "Invalid email or password"});
        }

        res.status(200).json({ ...user, password: undefined });
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = { register, login };