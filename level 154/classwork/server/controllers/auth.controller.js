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

module.exports = { register, login };