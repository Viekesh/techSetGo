import userModel from "../schema/userSchema.js";


export const addUser = async (req, res) => {
    const user = req.body;

    // console.log(user);

    const newUser = new userModel(user);

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.log("Error while handling addUser function in userController", error.message);
    }
};


export const getUsers = async (req, res) => {

    try {
        const users = await userModel.find();
        res.status(201).json({ users });
    } catch (error) {
        console.log("Error while calling getUsers API from backend", error.message);
    }

}