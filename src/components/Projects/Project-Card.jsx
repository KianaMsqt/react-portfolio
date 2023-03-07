import React from "react";

function ProjectCard(props) {
    return <>
        <div className="col-lg-4 col-md-6 mt-4 d-flex align-items-stretch">
            <div className="card">
                <div className="card-img-top">
                    <img src={props.image ? props.image : "https://placehold.co/600x400?text=No+Image"}  alt="Card cap" />
                </div>
                <div className="card-body d-flex flex-column">
                    <div>
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                    <div>
                        <a href={props.repo} target="_blank" rel="noreferrer" className="btn btn-dark mt-auto">GitHub Repository</a>
                        <hr/>
                        <a href={props.demo} target="_blank" rel="noreferrer" className="btn btn-primary mt-auto">Demo</a>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default ProjectCard;