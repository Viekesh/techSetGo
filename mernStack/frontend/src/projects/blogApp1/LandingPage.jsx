import React from 'react';
import Login from './components/Login/Login';
import "./components/styleSheets/LandingPage.css";



const LandingPage = () => {
    return (
        <div className='landing_page'>
            <Login />
        </div>
    )
}

export default LandingPage;