import React from "react";
import "./Skills.css"

function Skills() {
  return <>
        <section id="skills" className="skills">
			<div className="container mt-5 mb-5 pt-5 pb-5">
				<h2>My Skills</h2>
				<div className="row gx-4 justify-content-between">
					<div className="col-lg-4 col-md-6 mt-4">
						HTML
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 mt-4">
						CSS
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 mt-4">
						Javascript
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 mt-4">
						JQuery
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 mt-4">
						Bootstrap
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 mt-4">
						React.js
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>;
}
  
  export default Skills;