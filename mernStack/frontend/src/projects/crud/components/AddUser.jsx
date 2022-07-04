import React, { useState, useEffect } from 'react';
import { addUser } from "../service/api.js";
import { useNavigate } from "react-router-dom";



const defaultValue = {
    name: "",
    username: "",
    email: "",
    phone: "",
}

const AddUser = () => {

    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();

    useEffect(() => {
        console.log(user)
    }, [user]);

    const { name, username, email, phone } = user;

    const onValueChange = (event) => {
        // console.log(event.target.name, event.target.value);
        setUser({ ...user, [event.target.name]: event.target.value });
        // console.log(user);
    };

    const addUserDetails = async () => {
        await addUser(user);
        navigate("/all");
    };

    return (
        <div className="add_user">
            <h2>Add User</h2>
            <form>
                <input type="text" name="name" value={name} placeholder="Name" onChange={(event) => onValueChange(event)} />
                <input type="text" name="username" value={username} placeholder="Username" onChange={(event) => onValueChange(event)} />
                <input type="text" name="email" value={email} placeholder="Email" onChange={(event) => onValueChange(event)} />
                <input type="text" name="phone" value={phone} placeholder="Phone" onChange={(event) => onValueChange(event)} />
                <button type="submit" className='x_y_axis_center' onClick={() => addUserDetails()}>Add User</button>
            </form>
        </div>
    )
}

export default AddUser;