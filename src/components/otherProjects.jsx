import React from "react";
import "../styles/common.css";
import "../styles/otherProjects.css";
import Heading from "./heading";

export function renderSecondaryLink(url) {
  if (url) {
    return (
      <a href={url}>
        <i className="fas fa-external-link-alt"></i>
      </a>
    );
  } else {
    return null;
  }
}

const OtherProjects = () => {
  function getData() {
    var obj = require("../other-projects.json");
    return JSON.parse(JSON.stringify(obj));
  }

  var myData = getData();
  const projectCards = myData.map(item => {
    const codeLabels = item.technologyArray.map(techItem => {
      return (
        <label key={item.technologyArray.indexOf(techItem)}>{techItem}</label>
      );
    });
    return (
      <div id="other_projects_section" className="other-project-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <i className="fas fa-file-code"></i>
          <h4>{item.title}</h4>
        </div>
        <p>{item.bodyText}</p>
        <div className="code-container">{codeLabels}</div>
        <div className="link-container">
          <a href={item.githubLink}>
            <i className="fab fa-github"></i>
          </a>
          {renderSecondaryLink(item.secondaryLink)}
        </div>
      </div>
    );
  });
  return (
    <div className="other-container">
      <Heading number="03" title="Some Other Projects" />
      <div className="projects-grid">{projectCards}</div>
    </div>
  );
};

export default OtherProjects;
