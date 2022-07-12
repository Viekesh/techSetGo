import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from './LandingPage';



const BARoutes = () => {

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                </Routes>
            </main>
        </>
    )
}

export default BARoutes;









// const isLoggedIn = useSelector(state => state.isLoggedIn);
    // console.log(isLoggedIn);
    
// Here we can add isLoggedIn property from the redux and it will be equal to something would
// be now need to grab the state from the redux and to grab the state we have a hook,
// the useSelector that is available inside the react-redux which will then allow us to grap
// the redux state so it will have the callback function inside that with the state as the
// parameter and then we can just grab this property ("state = isLoggedIn.state")

// Now console.log the isLoggedIn if we can get false output means everything work fine

// Now we need to move on to the header again 