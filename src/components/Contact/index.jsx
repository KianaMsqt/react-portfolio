import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container mt-5 mb-5 pt-5 pb-5">
			<h2>Get In Touch</h2>
			<p className="py-5">
			Contact form is <strong>disabled</strong> right now. Thank you for
			your patience.
			</p>
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
      </section>
    </>
  );
}

export default Contact;
