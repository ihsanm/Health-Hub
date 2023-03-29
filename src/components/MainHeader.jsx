import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/Image-1.png";

const MainHeader = () => {
	return (
		<header className="main__header">
			<div className="container main__header-container">
			<div className="main__header-right">
					<div className="main__header-circle"></div>
					<div className="main__header-image">
						<img src={Image} alt="MainHeaderImage" />
					</div>
				</div>
				<div className="main__header-left">
					<h4>#90DaysOfWorkout</h4>
					<h1>Get fit, not hit by the couch potato curse! Join us today and let's pump up those muscles!</h1>
					<p>
					Health Hub is a React App designed to provide users with a range of health and fitness tools. 
					With Health Hub, users can check their BMI to see if they're a healthy weight, access exercise 
					recommendations for specific muscle groups, and get detailed nutrition information for the food 
					they're eating.
					</p>
					<Link to="/plans" className="btn lg">
						Get Started
					</Link>
				</div>
				
			</div>
		</header>
	);
};

export default MainHeader;
