import React from 'react';
import { BrowserRouter } from "react-router-dom";
import CrudRoutes from "./projects/crud/routes/CrudRoutes.jsx";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <CrudRoutes />
      </BrowserRouter>
    </>
  )
}

export default App;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
