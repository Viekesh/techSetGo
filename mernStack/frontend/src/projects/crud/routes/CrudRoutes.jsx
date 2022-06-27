import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import "../../../App.css";
import LandingPage from "../components/LandingPage";
import AddUser from '../components/AddUser';
import AllUser from "../components/AllUser";



const CrudRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/AddUser" element={<AddUser />} />
                <Route exact path="/AllUser" element={<AllUser />} />
            </Routes>
        </>
    )
}

export default CrudRoutes;