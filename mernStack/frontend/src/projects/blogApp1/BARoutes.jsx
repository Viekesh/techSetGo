import React from 'react';
import { Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import Login from "./components/Login";
import Register from "./components/Register.jsx";
import Header from './components/Header';



const BARoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/Login" element={<Login />} />
                <Route exact path="/Register" element={<Register />} />
            </Routes>
        </>
    )
}

export default BARoutes;