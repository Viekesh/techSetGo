import React, { useState } from 'react';
import "./styleSheets/Header.css";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';



const Header = () => {

    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    const [value, setValue] = useState();

    return (
        <header className='x_axis_center'>
            <NavLink to="/">
                <div className="logo x_y_axis_center">
                    <h1>Social Blog</h1>
                </div>
            </NavLink>

            {!isLoggedIn &&
                <div className="nav_buttons">
                    <NavLink to="/auth"><button>Login</button></NavLink>
                    <NavLink to="/Register"><button>Sign Up</button></NavLink>
                </div>
            }

            {isLoggedIn &&
                <div className="edit_blogs x_y_axis_center" value={value} onChange={(e, val) => setValue(val)}>
                    <NavLink to="/blogs"><button>All Blogs</button></NavLink>
                    <NavLink to="/myBlogs"><button>My Blogs...</button></NavLink>
                    <NavLink to="/"><button>LogOut</button></NavLink>
                </div>
            }
        </header>
    )
}

export default Header;