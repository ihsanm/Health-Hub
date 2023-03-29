import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
	return (
		<footer>
			<div className="container footer__container">
				<article>
					<Link to="/" className="logo">
						<img src={Logo} alt="Footer Logo" />
					</Link>
					<p>
					Get the support you need to achieve your fitness goals 
					and improve your overall wellbeing and get fit, stay healthy, and feel great 
					with our personalized workout plans.
					</p>
					<div className="footer__socials">
						<a
							href="https://www.linkedin.com/in/aartimeherchandani/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaLinkedin />
						</a>
						<a
							href="https://facebook.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaFacebookF />
						</a>
						<a
							href="https://twitter.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiOutlineTwitter />
						</a>
						<a
							href="https://instagram.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiFillInstagram />
						</a>
					</div>
				</article>
				<article>
					<h4>Permalinks</h4>
					<Link to="/about">Image Generator</Link>
					<Link to="/plans">BMI Calculator</Link>
					<Link to="/trainers">Calorie Calculator</Link>
					<Link to="/gallery">Nutrition</Link>
					<Link to="/contact">Contact</Link>
				</article>
				<article>
					<h4>Insights</h4>
					<Link to="/s">Blog</Link>
					<Link to="/s">Case Studies</Link>
					<Link to="/s">Events</Link>
					<Link to="/s">Communities</Link>
					<Link to="/constact">FAQs</Link>
				</article>
				<article>
					<h4>Get In Touch</h4>
					<Link to="/contact">Plans</Link>
					<Link to="/s">Trainers</Link>
				</article>
			</div>
			<div className="footer__copyright">
				<small> &copy; Bootcamp group 3 </small>
			</div>
		</footer>
	);
};

export default Footer;
