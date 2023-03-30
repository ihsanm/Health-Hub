import React from "react";
import "./caloriecalculator.css";
import HeaderImage from "../../images/header_bg_3.jpg";
import Header from "../../components/Header";
// import CalorieSearchResults from "../../components/CalorieCalculator/CalorieCalculator";
import CalorieMeter from '../../components/calorie-meter/Bmr'

const Gallery = () => {
  return (
<>


	<Header title="Calorie Calculator" image={HeaderImage}>
	A calorie calculator can also be a useful tool for healthcare professionals, 
	nutritionists, and fitness coaches who are working with clients to develop personalized 
	diet and exercise plans. By accurately estimating a person's daily energy needs, these professionals 
	can provide targeted recommendations and help their clients achieve their goals in 
	a safe and effective manner.
	</Header>
	



	{/* <CalorieSearchResults/> */}

	<CalorieMeter/>

	

	

	
</>
  )
}

export default Gallery

