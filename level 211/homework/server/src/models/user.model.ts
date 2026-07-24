import mongoose from "mongoose";
import bcrypt from "bcrypt";

export interface IUser {
    fullName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUserMethods {
    comparePassword(candidate: string): Promise<boolean>;
}

type UserModel = mongoose.Model<IUser, {}, IUserMethods>;

const userSchema = new mongoose.Schema<IUser, UserModel, IUserMethods>({
    fullName: {
        type: String,
        required: [true, "Full name is required!"]
    },
    email: {
        type: String,
        required: [true, "User email is required!"],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "User password is required!"],
        select: false
    }
}, { timestamps: true });

userSchema.pre("save", async function(): Promise<void> {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (candidate: string): Promise<boolean> {
    return await bcrypt.compare(candidate, this.password);
};

const User = mongoose.model<IUser, UserModel>("User", userSchema);

export default User;
