import React from 'react';
import './App.css';
import Bodyparts from './components/bodyparts';
import BmiCalculator from "./components/BmiCalculator";

function App() {
  return (
    <div>
    <div>
      <BmiCalculator />
    </div>
    <div>
      <p>hello world</p>
      <Bodyparts />
    </div>
    </div>
  );
}

export default App;
