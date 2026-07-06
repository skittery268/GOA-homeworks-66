const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "User name is required!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "User email is required!"],
        unique: [true, "User with this email already exists!"]
    },
    password: {
        type: String,
        required: [function () { return this.provider === "local" }, "User password is required"],
        select: false
    },
    provider: {
        type: String,
        enum: ["local", "google"],
        default: "local"
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true
    }
}, { timestamps: true });

userSchema.pre("save", async function() {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function(candidate) {
    return await bcrypt.compare(candidate, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;