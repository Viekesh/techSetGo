import React from 'react';
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import BARoutes from './projects/blogApp1/BARoutes';
import { Provider } from "react-redux";
import { store } from "./projects/blogApp1/store/index";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <BARoutes />
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App;








// So here provider doesn't know that which state we need to implement, So we need to implement
// the store prop and the store will be equal to the store that we have just created into the
// redux

// Now we are having the provider store equal to store and then we are having the app(BARoutes) as the
// provider and then we are wrapping the app(BARoutes) component with the redux and now to grap the
// state of the redux then we can move on to the app(BARoutes) component......