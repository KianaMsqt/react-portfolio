import React from "react";
import "./Projects.css";

// Import Project's Details
import projects from "./projects.json";
import ProjectCard from "./ProjectCard";


// Create an array of ProjectCard component included each project's details
const projectList = [];
for (let i = 0; i < projects.length; i++) {
    projectList.push(<ProjectCard {...projects[i]} />);
}

function Projects() {
  return <>
		<section id="portfolio">
			<div className="container mt-5 mb-5 pt-5 pb-5">
				<h2>My Portfolio</h2>
				<div className="row gx-4 justify-content-between">
					{projectList}
				</div>
				
			</div>
		</section>
  </>;
}

export default Projects;
