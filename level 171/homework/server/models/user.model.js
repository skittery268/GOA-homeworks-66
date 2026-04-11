const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User name is required!"]
    },
    email: {
        type: String,
        unique: [true, "User email must be unique"],
        required: [true, "User email is required!"]
    },
    password: {
        type: String,
        required: [true, "User password is required!"],
        minLength: [6, "Password length must be 6 characters"],
        select: false
    }
}, { timestamps: true });

userSchema.pre("save", async function() {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods.comparePassword = async function (candidate) {
    return await bcrypt.compare(candidate, this.password);
}

const User = mongoose.model("User", userSchema);

module.exports = User;