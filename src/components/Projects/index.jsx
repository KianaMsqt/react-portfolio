import React from "react";
import "./Projects.css";

function Projects() {
  return <>
		<section id="portfolio">
			<div className="container mt-5 mb-5 pt-5 pb-5">
				<h2>My Portfolio</h2>
				<div className="row gx-4 justify-content-between">

					<div className="col-lg-3 col-md-6 mt-4 d-flex align-items-stretch">
						<div className="card">
							<img className="card-img-top" src="https://placehold.co/600x400" alt="Card cap" />
							<div className="card-body d-flex flex-column">
								<h5 className="card-title">Portfolio Sample</h5>
								<p className="card-text">This is a portfolio website created only with HTML and CSS.</p>
								<a href="https://kianamsqt.github.io/portfolio/" target="_blank" rel="noreferrer" className="btn btn-dark mt-auto">Demo</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 mt-4 d-flex align-items-stretch">
						<div className="card">
							<img className="card-img-top" src="https://placehold.co/600x400" alt="Card cap" />
							<div className="card-body d-flex flex-column">
								<h5 className="card-title">Flashlight</h5>
								<p className="card-text">This is a flashlight effect following mouse cursor.</p>
								<a href="https://kianamsqt.github.io/flashlight-effect/" target="_blank" rel="noreferrer" className="btn btn-dark mt-auto">Demo</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 mt-4 d-flex align-items-stretch">
						<div className="card">
							<img className="card-img-top" src="https://placehold.co/600x400" alt="Card cap" />
							<div className="card-body d-flex flex-column">
								<h5 className="card-title">Front-EndEnd Triology</h5>
								<p className="card-text">This is pre-work challenge of Front-EndEnd Triology bootcamp.</p>
								<a href="https://kianamsqt.github.io/prework-study-guide/" target="_blank" rel="noreferrer" className="btn btn-dark mt-auto">Demo</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 mt-4 d-flex align-items-stretch">
						<div className="card">
							<img className="card-img-top" src="https://placehold.co/600x400" alt="Card cap" />
							<div className="card-body d-flex flex-column">
								<h5 className="card-title">Module One</h5>
								<p className="card-text">This is my work on module one of the bootcamp.</p>
								<a href="https://kianamsqt.github.io/module-1-challenge/" target="_blank" rel="noreferrer" className="btn btn-dark mt-auto">Demo</a>
							</div>
						</div>
					</div>
				
				</div>
				
			</div>
		</section>
  </>;
}

export default Projects;
