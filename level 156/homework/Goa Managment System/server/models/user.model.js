const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["Admin", "Mentor", "Leader"],
        default: "Mentor",
    },
    gitHub: {
        type: String,
        required: true,
    },
    facebook: {
        type: String
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;