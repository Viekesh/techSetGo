import React from 'react';
import { Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import Login from "./components/Login";
import Register from "./components/Register.jsx";
import Header from "./components/Header";
import Blogs from './components/Blogs';
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetails";
import AddBlog from './components/AddBlog';
import { useSelector } from 'react-redux';



const BARoutes = () => {

    const isLoggedIn = useSelector(state => state.isLoggedIn);

    console.log(isLoggedIn);

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path="/Register" element={<Register />} />
                    <Route exact path="/auth" element={<Login />} />
                    <Route exact path="/blogs" element={<Blogs />} />
                    <Route exact path="/myBlogs/add" element={<AddBlog />} />
                    <Route exact path="/myBlogs" element={<UserBlogs />} />
                    <Route exact path="/myBlogs/:id" element={<BlogDetail />} />
                </Routes>
            </main>
        </>
    )
}

export default BARoutes;









// Here we can add isLoggedIn property from the redux and it will be equal to something would
// be now need to grab the state from the redux and to grab the state we have a hook,
// the useSelector that is available inside the react-redux which will then allow us to grap
// the redux state so it will have the callback function inside that with the state as the
// parameter and then we can just grab this property ("state = isLoggedIn.state")

// Now console.log the isLoggedIn if we can get false output means everything work fine

// Now we need to move on to the header again 