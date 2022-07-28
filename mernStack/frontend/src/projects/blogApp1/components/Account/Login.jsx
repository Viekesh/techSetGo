import React, { useState } from 'react';
import "./Login.css";



const signUpInitialValues = {
  name: "",
  username: "",
  password: "",
}

const Login = () => {

  const [account, toggleAcc] = useState("login");

  const [signUp, setSignUp] = useState(signUpInitialValues);

  const toggleSignUp = () => {
    toggleAcc("signUp");
  }

  const onInputChange = (event) => {
    // console.log(event.target.name, event.target.value);
    setSignUp({ ...signUp, [event.target.name]: event.target.value });
  }

  return (
    <div className='user_form'>
      {
        account === "login" ?

          <div className="login">
            <h2>Register Here</h2>
            <form className='login_form x_axis_center'>
              <input onChange={(event) => onInputChange(event)} type="text" name="name" placeholder="Enter Your Name" className='login_form_elements' />
              <input onChange={(event) => onInputChange(event)} type="name" name="username" placeholder="Enter The Username" className='login_form_elements' />
              <input onChange={(event) => onInputChange(event)} type="password" name="password" placeholder="Enter The Password" className='login_form_elements' />
              <button
                type='submit'
                className='login_form_elements'
              >
                Register
              </button>

              <button
                type='submit'
                className='login_form_elements'
                onClick={() => toggleSignUp()}
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
                onClick={() => toggleSignUp()}
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






// The react "useState" hook allows us to track state in a function component
// State generally refers to data or proerties that need to be tracking in an application
// We initialise our state by calling useState in our function component "const [account, toggleAcc]=useState()"
// useState accept an initial state and returns two values
// first is current state
// second is a function that update the state

// Notice that we are destructuring the returned value from "useState"
// The first variable "account" is our current state
// The second variable "setAcc" is the function that is used to update our state
// These name are variable that can be named anything you would like

// Lastly, we set the initial state to an empty string: useState("") but bydefault here we set our
// initial state is "login"

// To update our state we use our state updater function
// Here our initial state is equal to "login" we need to change these state
// Our first variable "account" whose current value is "login"
// Variables is always read only we can't change it directly
// So here we need to use variable function "toggleAcc" to change the state

