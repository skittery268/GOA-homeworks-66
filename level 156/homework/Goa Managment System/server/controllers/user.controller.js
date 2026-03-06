const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({
            status: "success",
            arrayLength: users.length,
            data: users
        });
    } catch (err) {
        console.log(err);
    }
}

const addUser = async (req, res) => {
    try {
        const { fullName, email, password, role, gitHub, facebook } = req.body;

        const newUser = await User.create({ fullName, email, password, role, gitHub, facebook });

        res.status(201).json({
            status: "success",
            data: newUser
        });
    } catch (err) {
        console.log(err);
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                status: "fail",
                message: "User not found",
            });
        }

        res.status(204).json({
            status: "success",
            message: "User deleted successfully",
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { getAllUsers, addUser, deleteUser };