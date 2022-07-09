import React from 'react';
import "./styleSheets/Header.css";
import { NavLink } from "react-router-dom";



const Header = () => {
    return (
        <header className='x_axis_center'>
            <div className="logo"><h1>SocialBlog</h1></div>
            <div className="nav_buttons">
                <NavLink to="/Login"><button>Login</button></NavLink>
                <NavLink to="/Register"><button>Sign Up</button></NavLink>
            </div>
        </header>
    )
}

export default Header;