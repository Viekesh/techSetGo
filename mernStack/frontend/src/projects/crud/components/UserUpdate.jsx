import React, { useState, useEffect } from 'react';
import "../style.css";
import { getUserData, editUpdate } from "../service/api.js";
import { useNavigate, useParams } from "react-router-dom";



const defaultValue = {
    name: "",
    username: "",
    email: "",
    phone: "",
}

const UserUpdate = () => {

    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async () => {
        const response = await getUserData(id);
        setUser(response.data);
    };

    const { name, username, email, phone } = user;

    const editUserDetails = async () => {
        await editUpdate(id, user);
        navigate("/all");
    };

    const onValueChange = (event) => {
        // console.log(event.target.name, event.target.value);
        setUser({ ...user, [event.target.name]: event.target.value });
        console.log(user);
    };

    return (
        <div className="add_user">
            <h2>Update the user</h2>
            <form>
                <input type="text" value={name} name="name" placeholder="Name" onChange={(event) => onValueChange(event)} />
                <input type="text" value={username} name="username" placeholder="Username" onChange={(event) => onValueChange(event)} />
                <input type="text" value={email} name="email" placeholder="Email" onChange={(event) => onValueChange(event)} />
                <input type="text" value={phone} name="phone" placeholder="Phone" onChange={(event) => onValueChange(event)} />
                <button type="submit" className='x_y_axis_center' onClick={() => editUserDetails()}>Update User</button>
            </form>
        </div>
    )
}

export default UserUpdate;