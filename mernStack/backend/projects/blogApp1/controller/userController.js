import userModel from "../models/user.js";
import bcrypt from "bcrypt";



// Register User

export const signUp = async (req, res, next) => {
    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);

    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new userModel({ name, email, password: hashedPass, blogs: [] });

    let existingUser;

    try {
        existingUser = await userModel.findOne({ email });
    } catch (error) {
        return console.log(error.message);
    }

    if (existingUser) {
        res.status(400).json({ message: "User is already existing in the database! Login instead" });
    }

    try {
        await newUser.save();
        res.status(200).json({ message: "User is successfully added to the database" });
    } catch (error) {
        console.log("User already exist", error.message);
    }
}


// Login User

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    let existingUser;

    try {
        existingUser = await userModel.findOne({ email });
    } catch (error) {
        console.log(error.message);
    }

    if (!existingUser) {
        return res.status(404).json({ message: "User not found at this email" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Incorrect Password" });
    };

    return res.status(200).json({ message: "Login Successful", user: existingUser });
}


// Get All Users

export const getAllUser = async (req, res, next) => {
    let users;

    try {
        users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.log("Error while calling getAllUser API", error.message);
    }
}


// Delete User

export const deleteUser = async (req, res, next) => {
    try {
        await userModel.deleteOne({ _id: req.params.id });
        res.status(201).json("User has successfully deleted")
    } catch (error) {
        res.status(409).json({ message: "Error while calling delete user API from backend", message2: error.message });
    }
};








// Here once we are creating a new user like in the signUp it will be having a blogs
// because now we have defined the required field of the "blog" so it will just have
// some blogs inside thatc, so once we are defining the user as the name and the
// password then we can just define the blog will be equals to an empty array ("blog:[]")


// Now we need to move on to the blogs......