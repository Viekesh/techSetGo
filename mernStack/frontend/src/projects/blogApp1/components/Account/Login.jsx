import React, {useState} from 'react';
import "./Login.css";

const Login = () => {

  const [account, toggleAcc] = useState("login");

  const toggleSignUp = () => {
    toggleAcc("signUp");
  }

  return (
    <div className='user_form'>
      <div className="login">

        {
          account === "login" ? <h2>LOGIN HERE</h2> : <h2>REGISTER HERE</h2>
        }

        <form className='x_y_axis_center'>

          {
            account === "login"
            ? 
            <input type="text" className='login_form_elements' placeholder='Username' />
            :
            <input type="text" className='login_form_elements' placeholder='Enter Your Name'/>
          }

          <input type="password" className='login_form_elements' placeholder='Password' />
          <button className='login_form_elements'>LOGIN</button>

          <span>OR</span>

          {
            account === "login"
            ?
            <button
            className='login_form_elements'
            onClick={() => toggleSignUp()}
            >
              NOT YET REGISTERED
            </button>
            :
            <button className='login_form_elements'>LOGIN HERE</button>
          }

        </form>
      </div>
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

