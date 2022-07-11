import React, { useState } from 'react';
import "./styleSheets/Login.css";
import { NavLink } from 'react-router-dom';



const Register = () => {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setInputs((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <div className='user_login'>
            <div className="login register">
                <h2>Register Here</h2>
                <form className='login_form x_axis_center' onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={inputs.name} type="text" name="name" placeholder="Enter Your Name" className='login_form_elements' />
                    <input onChange={handleChange} value={inputs.email} type="name" name="email" placeholder="Enter The Username" className='login_form_elements' />
                    <input onChange={handleChange} value={inputs.password} type="password" name="password" placeholder="Enter The Password" className='login_form_elements' />
                    <button type='submit' className='login_form_elements'>Register</button>
                    <NavLink to="/auth" className='login_form_elements'>
                        <button type='submit'>
                            Already Have An Account
                        </button>
                    </NavLink>
                </form>
            </div>
        </div>
    )
}

export default Register;









// Here we can send the data to the backend for login and to register
// So for this we can use axios to send the request to the backend
// To send the request to the backend we cam make a funtion before handleSubmit function
// called "sendRequest"

// This is register form and we can send the data to the backend / server, so we can use
// in sendRequest function a post request (axios.post(""))
// Add the backend url in the first parameter of post request
// (axios.post("localhost:3001/api/user/signUp")) (signUp url of the backend)
// and in second parameter contain an object in json format, the user data we can send here in
// json format