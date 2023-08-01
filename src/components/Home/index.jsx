import React from "react";
import "./Home.css";
import CV from "./TayebeKianaMasqatiCV.pdf";

function Home() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid" id="about">
        <div className="container">
          <h1 className="display-4 text-white">About Me</h1>
          <div className="lead">
            <span className="text-white">
              Product enthusiast with 7+ years of experience in working with
              agile teams. Skilled in Front-End development. Reliable team
              player and eager to learn product skills.
            </span>
            <ul>
              <li className="text-white">
                Product Management Methodologies and Frameworks: Agile,
                Waterfall, Scrum
              </li>
              <li className="text-white">
                Development Skills: HTML, CSS, Javascript, jQuery, Vue.js, Git,
                SCSS, Stylus, Mustache, Pug, WordPress
              </li>
            </ul>
            <a
              href={CV}
              title="Download Resume"
              download="TayebeKianaMasqatiCV.pdf"
              className="btn btn-primary"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
