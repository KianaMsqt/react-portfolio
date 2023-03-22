import React from "react";
import { useParams } from "react-router-dom";
import projects from "./projects.json";

function ProjectDetails() {

    const { id } = useParams();
    const project = projects.find((project) => project.id === parseInt(id));

    return <>
        <div className="container mt-5 mb-5 project-details">
            <h2>{project.name}</h2>
            <div className="row">
                <div className="col-md-8 pe-5">
                    <p className="card-text">{project.description}</p>
                    <hr/>
                    <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-dark me-2">GitHub Repository</a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">Demo</a>
                </div>
                <div className="col-md-4">
                    <img src={project.image ? process.env.PUBLIC_URL + project.image : "https://placehold.co/600x400?text=No+Image"}  alt="Card cap" />
                </div>
            </div>
        </div>
    </>
}

export default ProjectDetails;