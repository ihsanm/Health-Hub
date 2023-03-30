import React from "react";
import "./contact.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
	return (
		<>
			<Header title="Get In Touch" image={HeaderImage}>
				
			</Header>

			<section className="contact">
				<div className="container contact__container">
					<div className="contact__wrapper">
						<a
							href="mailto:it.aartimehar@hotmail.com"
							target="_blank"
							rel="noreferrer noopener"
						>
							<MdEmail />
						</a>
						<a
							href="https://www.facebook.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<BsMessenger />
						</a>
						<a
							href="https://www.linkedin.com/in/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiFillLinkedin />
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
