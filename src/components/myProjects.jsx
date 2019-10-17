import React from "react";
import "../styles/common.css";
import "../styles/myProjects.css";
import Heading from "./heading";

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
      item.codeArray
    );
  });

  function renderProjectRight(title, desc, imageSrc, codeArray) {
    var theCodeArray = codeArray.reverse();
    const codeLabels = theCodeArray.map(item => {
      return <label>{item}</label>;
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

  return (
    <div id="my_projects_section" className="container">
      <Heading number="02" title="Software I've Made" />
      {projectItems}
    </div>
  );
};

export default MyProjects;
