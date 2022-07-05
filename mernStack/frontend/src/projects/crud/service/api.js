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


export const getUserData = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log("Error while calling editUser API", error.message);
    }
}


export const editUpdate = async (id, user) => {
    try {
        return await axios.put(`${URL}/${id}`, user);
    } catch (error) {
        console.log("Error while calling editUpdate API", error.message);
    }
}


export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`)
    } catch (error) {
        console.log("Error while calling deleteUser API", error.message);
    }
}