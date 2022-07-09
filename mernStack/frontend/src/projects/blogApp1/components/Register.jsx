import React from 'react';
import "./styleSheets/Login.css";

const Register = () => {
    return (
        <div className='user_login'>
            <div className="login register">
                <h2>Register Here</h2>
                <form className='login_form x_axis_center'>
                    <input type="text" name="name" placeholder="Enter Your Name" className='login_form_elements' />
                    <input type="text" name="username" placeholder="Enter The Username" className='login_form_elements' />
                    <input type="text" name="password" placeholder="Enter The Password" className='login_form_elements' />
                    <button type='submit' className='login_form_elements'>Register</button>
                    <button type='submit' className='login_form_elements'>Already Have An Account</button>
                </form>
            </div>
        </div>
    )
}

export default Register;