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
            ref: "blog",
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









// Here we defined the "blogs" field inside the userModel but it will be an array([]), because
// the user can have the multiple blogs inside that and array can contain an object it will be
// the type and the type will be the same as the "mongoose.Types.ObjectId"
// We can provide the reference also and it will contain the reference to the "blog"
// "blog" is the collection
// Now move on users controller