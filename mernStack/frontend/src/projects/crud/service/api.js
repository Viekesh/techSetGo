import axios from "axios";



const URL = "http://localhost:3001";

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log(`Error while calling addUser API`, error.message);
    }
};


export const getUser = async () => {
    try {
        return await axios.get(`${URL}/all`);
    } catch (error) {
        console.log("Error while calling getUsers API from frontend", error.message);
    }
}