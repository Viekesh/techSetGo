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
        const users = await userModel.find({});
        res.status(200).json(users);
    } catch (error) {
        console.log("Error while calling getUsers API from backend", error.message);
    }

}


export const getUser = async (req, res) => {

    console.log(req.params.id);

    try {
        // const user = await userModel.find({ _id: req.params.id });
        const user = await userModel.findById({ _id: req.params.id });
        res.status(200).json(user);
    } catch (error) {
        console.log("Error while calling updateUser API", error.message);
    }
}


export const editUser = async (req, res) => {

    let user = req.body;

    const editUser = new userModel(user);

    try {
        await editUser.updateOne({ _id: req.params.id }, editUser);
        res.status(201).json(editUser);
    } catch (error) {
        console.log("Error while calling editUser API from backend", error.message);
        res.status(409).json({ message: error.message });
    }
}


export const deleteUser = async (req, res) => {
    try {
        await userModel.deleteOne({ _id: req.params.id })
        res.status(201).json("User has successfully deleted");
    } catch (error) {
        res.status(409).json("Error while calling delete user API from backend", error.message);
    }
}