import mongoose from "mongoose";
import blogModel from "../models/blog.js";
import userModel from "../models/user.js";



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


export const addBlog = async (req, res, next) => {
    const { title, description, image, user } = req.body;

    const blog = new blogModel({ title, description, image, user });

    try {
        await blog.save();
    } catch (error) {
        console.log(error.message);
    }

    return res.status(200).json({ blog });
}


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


export const deleteById = async (req, res, next) => {
    const id = req.params.id;

    let blog;

    try {
        blog = await blogModel.findByIdAndRemove(id);
        res.status(200).json({ message: "Successfully Deleted" });
    } catch (error) {
        console.log(error.message);
    }

    if (!blog) {
        res.status(500).json({ message: "Unable to delete" });
    };
}


// export const addBlog = async (req, res, next) => {
//     const { title, description, image, user } = req.body;

//     let existingUser;

//     try {
//         existingUser = await userModel.findById(user);
//     } catch (error) {
//         return console.log("Error while calling addBlog Api", error.message);
//     }

//     if (!existingUser) {
//         res.status(400).json({ message: "User Not Found By This ID" });
//     }

//     const blog = new blogModel({ title, description, image, user });

//     try {
//         const session = await mongoose.startSession();
//         session.startTransaction();
//         await blog.save({ session });
//         existingUser.blogs.push(blog);
//         await existingUser.save({ session });
//         await session.commitTransaction();
//     } catch (error) {
//         console.log(error.message);
//         return res.status(500).json({ message: "Error while creating new blog" });
//     }

//     return res.status(200).json({ blog });
// }