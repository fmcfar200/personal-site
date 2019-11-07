import React from "react";
import Heading from "./heading";
import "../styles/common.css";
import "../styles/myProjects.css";
import "../styles/myProjectsSmall.css";

const MyProjects = () => {
  function getData() {
    var obj = require("../my-projects.json");
    return JSON.parse(JSON.stringify(obj));
  }

  var projectData = getData();
  const projectItems = projectData.map(item => {
    return renderProjectSmall(
      item.title,
      item.desc,
      item.imageSrc,
      item.codeArray
    );
  });

  function renderProjectRight(title, desc, imageSrc, codeArray) {
    var theCodeArray = codeArray.reverse();
    const codeLabels = theCodeArray.map(item => {
      return <label key={codeArray.indexOf(item)}>{item}</label>;
    });

    return (
      <div className="project-container">
        <img src={imageSrc} />
        <div className="text-container right">
          <h2>{title}</h2>
          <p>{desc}</p>
          <div className="code-label-container">{codeLabels}</div>
        </div>
      </div>
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
