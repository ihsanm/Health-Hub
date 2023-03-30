import React from "react";
import "./excerciseimage1.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/Image-2.jpg";
import Bodyparts from "../../components/bodyparts"


const ExcerciseImages = () => {
	return (
		<>
			<Header title="Excercise Image Generator" image={HeaderImage}>
			The exercise image generator typically uses algorithms and 
			pre-defined templates to create images that illustrate various exercises or workouts. 
			These images may include illustrations of people performing exercises, diagrams of how to perform 
			specific exercises, or animated sequences demonstrating proper form and technique.
			</Header>

			<Bodyparts/>

			
		</>
	);
};

export default ExcerciseImages;
