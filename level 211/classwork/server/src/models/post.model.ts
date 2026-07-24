import mongoose from "mongoose";

export interface IPost {
    title: string;
    description: string;
    updatedAt: Date;
    createdAt: Date;
    authorId: mongoose.Types.ObjectId;
};

const postSchema = new mongoose.Schema<IPost>({
    title: {
        type: String,
        required: [true, "Post title is required!"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Post description is required"]
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        required: [true, "Author ID is required!"],
        ref: "User"
    }
}, { timestamps: true });

const Post = mongoose.model<IPost>("Post", postSchema);

export default Post;