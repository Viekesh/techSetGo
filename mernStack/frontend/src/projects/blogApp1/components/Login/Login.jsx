import React, { useState } from 'react';
import "./Login.css";



const Login = () => {

    const [account, toggleAccount] = useState("signup");

    const toggleSignup = () => {
        account === "signup" ? toggleAccount("login") : toggleAccount("signup");
    }

    return (
        <div className='user_login'>

            {
                account === "signup" ?

                    <div className="login">
                        <h2>Register Here</h2>
                        <form className='login_form x_axis_center'>
                            <input type="text" name="name" placeholder="Enter Your Name" className='login_form_elements' />
                            <input type="name" name="email" placeholder="Enter The Username" className='login_form_elements' />
                            <input type="password" name="password" placeholder="Enter The Password" className='login_form_elements' />
                            <button type='submit' className='login_form_elements'>Register</button>

                            <button
                                type='submit'
                                className='login_form_elements'
                                onClick={() => toggleSignup()}
                            >
                                Already Have An Account
                            </button>

                        </form>
                    </div>

                    :

                    <div className="login">
                        <h2>Login Here</h2>
                        <form className='login_form x_axis_center'>
                            <input type="text" name="username" placeholder="Enter The Username" className='login_form_elements' />
                            <input type="text" name="password" placeholder="Enter The Password" className='login_form_elements' />
                            <button type='submit' className='login_form_elements'>Submit</button>

                            <button
                                type='submit'
                                className='login_form_elements'
                                onClick={() => toggleSignup()}
                            >
                                Not Yet Registered
                            </button>

                        </form>
                    </div>

            }

        </div>
    )
}

export default Login;