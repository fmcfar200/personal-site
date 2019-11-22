import React from "react";
import Heading from "./heading";
import { renderSecondaryLink } from "./otherProjects";
import Fade from "react-reveal/Fade";
import "../styles/common.css";
import "../styles/myProjects.css";
// import "../styles/myProjectsSmall.css";

const MyProjects = () => {
  function getData() {
    var obj = require("../my-projects.json");
    return JSON.parse(JSON.stringify(obj));
  }

  var projectData = getData();
  const projectItems = projectData.map(item => {
    return renderProjectRight(
      item.title,
      item.desc,
      item.imageSrc,
      item.codeArray,
      item.githubLink,
      item.secondaryLink
    );
  });

  function renderProjectRight(
    title,
    desc,
    imageSrc,
    codeArray,
    githubLink,
    secondaryLink
  ) {
    var theCodeArray = codeArray.reverse();
    const codeLabels = theCodeArray.map(item => {
      return <label key={codeArray.indexOf(item)}>{item}</label>;
    });

    return (
      <Fade bottom>
        <div className="project-container">
          <img src={imageSrc} />
          <div className="image-filter"></div>
          <div className="text-container right">
            <div className="test1">
              <div className="title-container">
                <div>
                  {renderSecondaryLink(secondaryLink)}
                  <a href={githubLink} target="_blank">
                    <i className="fab fa-github" />
                  </a>
                </div>
                <h2>{title}</h2>
              </div>
              <p>{desc}</p>
              <div className="code-label-container">{codeLabels}</div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }

  function renderProjectSmall(title, desc, imageSrc, codeArray) {
    var theCodeArray = codeArray.reverse();
    const codeLabels = theCodeArray.map(item => {
      return <label key={codeArray.indexOf(item)}>{item}</label>;
    });

    return (
      <div className="project-container-small">
        <img src={imageSrc} alt="Screenshot" class="image" />
        <div className="overlay">
          <div className="text">{desc}</div>
        </div>
        <div className="title-container">{title}</div>
      </div>
    );
  }

  return (
    <div id="my_projects_section" className="container">
      <Heading number="02" title="Software I've Made" />
      {projectItems}
    </div>
  );
};

export default MyProjects;
