import React from "react";
import "./home.css";
import MainHeader from "../../components/MainHeader";

import Values from "../../components/Values";

// import Footer from "../../components/Footer";

const Home = () => {
	return (
		<>
			<MainHeader />
			<Values />
			{/* <Footer /> comment this out so footer wount be double */}
		</>
	);
};

export default Home;
