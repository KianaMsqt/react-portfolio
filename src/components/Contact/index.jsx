import React from "react";
import "./Contact.css";
import avatar from './Kiana-Masqati.jpeg' ;
import CV from "./Tayebe-Kiana-Masqati-resume.pdf";

function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container mt-5 mb-5 pt-5 pb-5">
			<h2>Get In Touch</h2>
			<div className="row">
				<div className="col-lg-7 col-md-6">
					<p className="pb-5">Contact form is <strong>disabled</strong> right now. Thank you for your patience.</p>
					<form>
						<fieldset disabled>
							<div className="form-group">
								<label htmlFor="email">Your Email</label>
								<input
									type="text"
									id="email"
									className="form-control"
									placeholder="email@domain.com"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="name">Your Name</label>
								<input
									type="text"
									id="name"
									className="form-control"
									placeholder="John Smith"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="message">Write your message</label>
								<textarea id="message" className="form-control"></textarea>
							</div>
							<button type="submit" className="btn btn-dark">
							Submit
							</button>
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
