import React from 'react';
import { NavLink } from 'react-router-dom';
import "../style.css";



const Navbar = () => {
    return (
        <header className='x_axis_center'>
            <div className="logo"><NavLink to="/"><h1>Home</h1></NavLink></div>
            <div className="links x_axis_center">
                <NavLink to="/AddUser">Add User</NavLink>
                <NavLink to="/AllUser">All User</NavLink>
            </div>
        </header>
    )
}

export default Navbar;