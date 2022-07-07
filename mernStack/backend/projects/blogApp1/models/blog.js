import mongoose from "mongoose";



const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true,
    }
},
    {
        timestamps: true,
    }
);

const blogModel = mongoose.model("blog", blogSchema);

export default blogModel;









// Now we need to relate user with the blog and the blog with the user

// To do this we can use mongoose so we can just provide the reference to the collection
// of the blog from the users and vice versa...from the blogs to the users as well

// Here we can provide the reference to the user, we already defined the user in blogSchema
// it will not type of the string, it will type of the "mongoose.Types.ObjectId"
// ObjectId means id of the user...means we can specify the ObjectId from there

// Now we need to specify a reference, so "ref" is used to provide the reference inside the
// string, here we need to define the collection name
// Collection name is when we created the userModel it will be the user, so it will just
// store the collection as a "user"

// Here we have defined the user as a "type" ("mongoose.Types.ObjectId") because of the
// mongoose.type of ObjectId and we have specified the reference of the user

// Now the thing is that every blog will contain only one single user
// So the each blog will now they have the parent of the one single user
// But each user can have the multiple blogs, So here we are only defining the single
// user per single blog
// Now just move on to the userModel......