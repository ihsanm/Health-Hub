import React from "react";
import "./nutrition.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Nutrition from "../../components/Nutrition/Nutrition";

const NurtionCalcu = () => {
	return (
		<>
			<Header title="Nutrition and Diet" image={HeaderImage}>
			A food calorie calculator is a tool that is used to estimate the number of calories in a 
			particular food or meal. The calculator typically works by allowing a person to enter the 
			ingredients or type of food they are consuming, along with the portion size, and then providing 
			an estimate of the total calorie content.
			</Header>
			
<Nutrition/>

		</>
	);
};

export default NurtionCalcu;
