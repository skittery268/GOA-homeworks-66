const User = require("../models/user.model");

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json("All fields are required");
        }

        const newUser = await User.create({ name, email, password });

        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json("All fields are required");
        }

        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(400).json("Invalid credentials");
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports = { register, login };