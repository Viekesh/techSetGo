import React, { useState, useEffect } from 'react';
import { getUser } from '../service/api';
import { NavLink } from 'react-router-dom';



const AllUser = () => {

    const [users, setUsers] = useState([]);

    console.log(typeof (users));

    useEffect(() => {
        getAllUser();
    }, []);

    const getAllUser = async () => {
        let response = await getUser();
        console.log(response.data);
        setUsers(response.data);
    };

    return (
        <div className='all_user'>
            <table>
                <thead className='thead'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user._id} >
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <NavLink to={`/UserUpdate/${user._id}`}><button>Edit</button></NavLink>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllUser;