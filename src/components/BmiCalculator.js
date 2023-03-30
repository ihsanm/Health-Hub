//https://reactrouter.com/en/main/upgrading/v5


import React, { useState } from "react";

function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBmi = () => {
    const bmiValue = (weight / Math.pow(height / 100, 2)).toFixed(2);
    setBmi(bmiValue);
  };

  return (
    <div className="calculator-area">
      <h1 className="calc-heading">BMI Calculator</h1>
      <div>
        <label>Weight (in kg): </label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div><br></br>
      <div>
        <label>Height (in cm): </label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div><br></br>
      <button onClick={calculateBmi}>Calculate BMI</button>
      <div>
        <label>BMI: </label>
        <span>{bmi}</span>
        <p> If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range. If your BMI is 25.0 to 29.9, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obese range.</p>
      </div>
    </div>
  );
}

export default BmiCalculator;