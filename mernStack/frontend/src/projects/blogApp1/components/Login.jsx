import React from 'react';
import "./styleSheets/Login.css";
import { NavLink } from "react-router-dom";



const Login = () => {

    return (
        <div className='user_login'>
            <div className="login">
                <h2>Login Here</h2>
                <form className='login_form x_axis_center'>
                    <input type="text" name="username" placeholder="Enter The Username" className='login_form_elements' />
                    <input type="text" name="password" placeholder="Enter The Password" className='login_form_elements' />
                    <button type='submit' className='login_form_elements'>Submit</button>
                    <NavLink to="/Register" className='login_form_elements'>
                        <button type='submit'>
                            Not Yet Registered
                        </button>
                    </NavLink>
                </form>
            </div>
        </div>
    )
}

export default Login;