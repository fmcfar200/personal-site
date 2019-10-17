import React from "react";
import "../styles/common.css";
import "../styles/otherProjects.css";
import Heading from "./heading";

const OtherProjects = () => {
  function getData() {
    var obj = require("../other-projects.json");
    return JSON.parse(JSON.stringify(obj));
  }

  var myData = getData();
  const projectCards = myData.map(item => {
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

        <div>
          <p>{item.bodyText}</p>
        </div>
        <div className="code-container">
          <label>C#</label>
          <label>C++</label>
          <label>C</label>
          <label>REST API</label>
        </div>
        <div className="link-container">
          <i className="fab fa-github"></i>
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
