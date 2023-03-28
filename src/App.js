import React from "react";
import "./App.css";
import Bodyparts from "./components/bodyparts";
import BmiCalculator from "./components/BmiCalculator";
import Navbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './components/homePage';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Nutrition from "./components/Nutrition/Nutrition";

function App() {
  return (
<BrowserRouter>
      <Navbar />
      <div className='container mt-2' style={{ marginTop: 40 }}>
        <Routes>
                 <Route exact path='/' element ={<HomePage />}/>
          
          <Route path='/Bmicalculator' element ={<BmiCalculator />}/>
          <Route path='/bodyparts' element ={<Bodyparts />}/>
          <Route path='/nutrition' element ={<Nutrition />}/>
  
        </Routes>
      </div>
    </BrowserRouter>

    // <div className='app-area'>
    //   <NavBar/>
    // <div>
    //   <Bodyparts />
    // </div>
    // <div>
    //   <BmiCalculator />
    // </div>
    // <div>
    //   <Nutrition />
    // </div>
    // </div>
  );
}

export default App;
