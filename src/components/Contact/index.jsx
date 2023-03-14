import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import "./Contact.css";
import avatar from './Kiana-Masqati.jpeg' ;
import CV from "./Tayebe-Kiana-Masqati-resume.pdf";

function Contact() {

	const [formData, setFormData] = useState({ email: "", name: "", message: "" });
	
	const handleInputChange = event => {
		// Getting the value and name of the input which triggered the change
		const { name, value } = event.target;
		
		// Updating the input's state
		setFormData({
			...formData,
			[name]: value
		});
	};
	
	const [validationMessage, setValidationMessage] = useState(null);
	
	const handleFormSubmit = event => {
        event.preventDefault();
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        // const { email, message } = formData;

		console.log( formData )
        if (!emailRegex.test({...formData.email})) {
			// Set an object with properties for the toast message
			setValidationMessage({ header: "Failed!", text: "Please enter a valid email address.", color: "red" });
			return;
		}

        if (!{...formData.message}) {
			// Set an object with properties for the toast message
			setValidationMessage({ header: "Failed!", text: "Please enter a message.", color: "red" });
			return;
		}

        // submit form if it's valid
        setFormData({
            email: "",
            name: "",
            message: ""
        });

		// Set an object with properties for the toast message
		setValidationMessage({ header: "Success!", text: "Thank you for your message!", color: "green" });

    };

	return (
    <>
      <section id="contact">
        <div className="container mt-5 mb-5 pt-5 pb-5">
			<h2>Get In Touch</h2>
			<div className="row">
				<div className="col-lg-7 col-md-6 position-relative">
					<p className="pb-5 mb-5">Contact form is <strong>disabled</strong> right now. Thank you for your patience.</p>
					{/* Check if there is something to show in toast */}
					{validationMessage && (
						<Toast
							show={true}
							style={{
								position: 'absolute',
								top: "30px",
								right: 0,
							}}
						>
							<Toast.Header>
								<strong className="mr-auto" style={{ color: validationMessage.color }}>{validationMessage.header}</strong>
							</Toast.Header>
							<Toast.Body>{validationMessage.text}</Toast.Body>
						</Toast>
					)}
					<form>
						<fieldset>
							<div className="form-group mb-3 required">
								<label htmlFor="email">Your Email</label>
								<input
									type="email"
									id="email"
									className="form-control"
									placeholder="email@domain.com"
									onChange={handleInputChange}
								/>
							</div>
							<div className="form-group mb-3">
								<label htmlFor="name">Your Name</label>
								<input
									type="text"
									id="name"
									className="form-control"
									placeholder="John Smith"
									onChange={handleInputChange}
								/>
							</div>
							<div className="form-group mb-3 required">
								<label htmlFor="message">Write your message</label>
								<textarea 
									id="message" 
									className="form-control"
									onChange={handleInputChange}
								>
								</textarea>
							</div>
							<div className="d-grid gap-2">
								<button 
									type="submit" 
									className="btn btn-dark"
									onClick={handleFormSubmit}
								>
									Send Message
								</button>
							</div>
						</fieldset>
					</form>
				</div>
				<div className="col-lg-5 col-md-6 contact-details ps-5">
					<img src={avatar} alt="Kiana masqati" />
					<ul className="bg-light mt-3 mb-3">
						<li>Email: <a href="mailto:masqati.kiana@gmail.com">masqati.kiana@gmail.com</a></li>
						<li>GitHub: <a href="https://github.com/KianaMsqt" target="_blank" rel="noreferrer">@KianaMsqt</a></li>
						<li>Linkedin: <a href="https://www.linkedin.com/in/kiana-masqati/" target="_blank" rel="noreferrer">/in/kiana-masqati/</a></li>
						<li className="mt-3"><a href={CV} title="Download Resume" download="Tayebe-Kiana-Masqati-resume.pdf" className="btn btn-primary d-block">Download My Resume</a></li>
					</ul>
				</div>
			</div>
        </div>
      </section>
    </>
  );
}

export default Contact;
