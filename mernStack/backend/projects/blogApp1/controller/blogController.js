import mongoose from "mongoose";
import blogModel from "../models/blog.js";
import userModel from "../models/user.js";


// Get All Blogs From The Server

export const getAllBlogs = async (req, res, next) => {
    let blogs;

    try {
        blogs = await blogModel.find();
        res.status(200).json({ blogs });
    } catch (error) {
        return console.log("Error while calling getAllBlogs API", error.message);
    };

    if (!blogs) {
        return res.status(404).json({ message: "Blogs Not Found" });
    };
};


// Create New Blog By Using Users Id's

export const addBlog = async (req, res, next) => {
    const { title, description, image, user } = req.body;

    let existingUser;

    try {
        existingUser = await userModel.findById(user);
    } catch (error) {
        return console.log(error.message);
    }

    if (!existingUser) {
        return res.status(400).json({ message: "Unable to find user by this ID" });
    };

    const blog = new blogModel({ title, description, image, user });

    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await blog.save({ session });
        existingUser.blogs.push(blog);
        await existingUser.save({ session });
        await session.commitTransaction();
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Unable to save blog from blog controller" });
    }

    return res.status(200).json({ blog });
}


// Update Existing Blogs

export const updateBlog = async (req, res, next) => {
    const { title, description } = req.body;

    const blogId = req.params.id;

    let blog;

    try {
        blog = await blogModel.findByIdAndUpdate(blogId, {
            title,
            description,
        });
    } catch (error) {
        console.log(error.message);
    };

    if (!blog) {
        return res.status(500).json({ message: "Unable to update the blog" });
    };

    return res.status(200).json({ blog });
};


// Get Blogs By Using Blog Id's

export const getById = async (req, res, next) => {
    const id = req.params.id;

    let blog;

    try {
        blog = await blogModel.findById(id);
    } catch (error) {
        console.log(error.message);
    };

    if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
    };

    return res.status(200).json({ blog });
};


// Deleted The Blogs From Blog And User Collection

export const deleteById = async (req, res, next) => {
    const id = req.params.id;

    let blog;

    try {
        blog = await blogModel.findByIdAndRemove(id).populate("user");
        await blog.user.blogs.pull(blog);
        await blog.user.save();
        res.status(200).json({ message: "Successfully Deleted" });
    } catch (error) {
        console.log(error.message);
    }

    if (!blog) {
        res.status(500).json({ message: "Unable to delete" });
    };
}


// Get All Blogs Which Is Creaed By The User

export const blogGetByUserId = async (req, res, next) => {
    const userId = req.params.id;

    let userBlogs;

    try {
        userBlogs = await userModel.findById(userId).populate("blogs");
    } catch (error) {
        return console.log(error.message);
    }

    if (!userBlogs) {
        return res.status(404).json({ message: "Blogs not found" });
    };

    return res.status(200).json({ blogs: userBlogs });
}









// Here once we are creating a new addBlog, so now we need to add the user as well
// so now this time the user will contain the id, so before everything now creating
// the addBlog, now we can just create the validation we can just create an existing
// user again like that existingUser is available or not
// by default it will be be undefined so we can just add try-catch block again

// Now we need to add the blog to the user as well and for that now we can just
// remove that await ("await blog.save();")

// So we can just add the session from there so for that now we can just define here the session
// So it will just start the session and then we will just do every single thing from this
// session and then we will just abort this session so we can just have a session variable
// and then we will be having startTransaction

// So we will just start the transaction from there so it will just save the blog
// Now we will just use the existingUser variable that we have ("existingUser.blogs.push(blog);")
// this user will contain the existing user

// So the existingUser will contain from the user that we are just finding and it will just
// push the blog to this array ("existingUser.blogs.push(blog);") like it will be the blog

// And then we are referring to the blog and then we can just save also and we can save
// also from there (await existingUser.save();)

// So it will just save but now we need to add a session because now we are saving the user
// and now we need to add the session always so till the session

// Here also we need to define we need to define the session because now we need to save the
// user from this session only from this session object only
// So we need to define this session there as well (await existingUser.save({ session });) and
// there as well (await blog.save({ session });)

// So now we are just defining the sessions as a key value pair again and then if everything
// would work fine (await session.commitTransaction();), so now after this the transaction
// would be committed



// Next thing we can do is delete the blog
// We need to delete the blog from blog collection(array) and user collection(array) also
// So for this we can use the populate method, to populate something
// So the populate method will allow us to populate somithing from this
// object (blog = await blogModel.findByIdAndRemove(id);) so we will get the user so it will
// just move on to the users collection to populate the works from rererence collection ("user")


