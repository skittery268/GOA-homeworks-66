const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userShcema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"]
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required!"]
    }
}, { timestamps: true });

userShcema.pre("save", async function() {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
})

userShcema.methods.comparePassword = async function(candidate) {
    return await bcrypt.compare(candidate, this.password);
}

const User = mongoose.model("User", userShcema);

module.exports = User;