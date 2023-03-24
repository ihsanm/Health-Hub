import React from 'react';
import './App.css';
import Bodyparts from './components/bodyparts';
import BmiCalculator from "./components/BmiCalculator";
import Nutrition from './components/Nutrition';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nutrition from './components/Nutrition/Nutrition';

function App() {
  return (
    <div className='app-area'>
      <NavBar/>
    <div>
      <Bodyparts />
    </div>
    <div>
      <BmiCalculator />
    </div>
    <div>
      <Nutrition />
    </div>
    </div>
  );
}

export default App;
