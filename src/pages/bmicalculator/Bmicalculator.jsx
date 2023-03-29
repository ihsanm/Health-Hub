import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import "./bmicalculator.css";
import BmiCalculator from "../../components/BmiCalculator";

const Trainers = () => {
	return (
		<>
			<Header image={HeaderImage} title="BMI Calculator">
			The use of a BMI calculator can be helpful for individuals who are trying to manage their weight or improve 
			their overall health and fitness. By understanding their BMI, a person can get an estimate of their body 
			fat and determine if they are at a healthy weight for their height.
			</Header>

<BmiCalculator/>

		
		</>
	);
};

export default Trainers;
