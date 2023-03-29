// rafce -> shortcut to create component and export
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/excercise-image/ExcerciseImage";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/calorie-calculator/Caloriecalulator";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/nutrition/Nutrition";
import Trainers from "./pages/bmicalculator/Bmicalculator";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";


const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="gallery" element={<Gallery />} />
				<Route path="plans" element={<Plans />} />
				<Route path="trainers" element={<Trainers />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;