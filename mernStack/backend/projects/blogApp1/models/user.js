import mongoose from "mongoose";



const userSchema = mongoose.Schema({
    name: {
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
        minLength: 10,
    },
    blogs: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Blog",
            requred: true,
        }
    ]
},
    {
        timestamps: true,
    }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;