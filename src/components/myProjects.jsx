import React from "react";
import "../styles/common.css";
import "../styles/myProjects.css";

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
    <div className="container">
      <div className="sub-header" style={{ width: "75%" }}>
        <h3>02. Software I've Made</h3>
        <div className="line"></div>
      </div>
      {projectItems}
    </div>
  );
};

export default MyProjects;
