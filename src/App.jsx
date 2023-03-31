// rafce -> shortcut to create component and export
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import ExcerciseImages from "./pages/excercise-image/ExcerciseImage";
import Contact from "./pages/contact/Contact";
import CalorieCalu from "./pages/calorie-calculator/Caloriecalulator";
import NotFound from "./pages/notFound/NotFound";
import NurtionCalcu from "./pages/nutrition/Nutrition";
import BMICalulator from "./pages/bmicalculator/Bmicalculator";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";


const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="ExcerciseImages" element={<ExcerciseImages />} />
				<Route path="contact" element={<Contact />} />
				<Route path="CalorieCalu" element={<CalorieCalu />} />
				<Route path="NurtionCalcu" element={<NurtionCalcu />} />
				<Route path="BMICalulator" element={<BMICalulator />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
