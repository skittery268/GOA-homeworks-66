const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const sendMail = require("../utils/email");

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Full Name is required!"]
    },
    email: {
        type: String,
        required: [true, "Email is required!"]
    },
    password: {
        type: String,
        required: [[true, "Password is required!"]],
        minlength: [6, "Password min length are 6 characters"]
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationCode: {
        type: Number,
    }
}, { timestamps: true })

userSchema.pre("save", async function() {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods.comparePassword = async function(candidate) {
    return await bcrypt.compare(candidate, this.password);
}

userSchema.methods.sendVerificationCode = async function() {
    const code = Math.floor(1000 + Math.random() * 9000);

    this.verificationCode = code;

    await this.save();

    sendMail(this.email, "Verification Code", `Your verification code: ${code}`);
}

const User = mongoose.model("users", userSchema);

module.exports = User;