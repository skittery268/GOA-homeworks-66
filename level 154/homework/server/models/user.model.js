const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationCode: {
        type: Number
    }
});

userSchema.pre("save", async function () {
    if (this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods.comparePassword = async function (candidate) {
    return await bcrypt.compare(candidate, this.password);
}

userSchema.methods.sendVerificationCode = async function() {
    const code = Math.floor(1000 + Math.random() * 9000);

    this.verificationCode = code;

    await this.save();

    sendEmail(this.email, "Verification Code", `Your verification code is: ${code}`);
}

const User = mongoose.model("users", userSchema);

module.exports = User;