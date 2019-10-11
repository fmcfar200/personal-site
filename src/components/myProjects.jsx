import React from "react";
import "../styles/common.css";
import "../styles/myProjects.css";

const MyProjects = () => {
  function renderProjectRight() {
    return (
      <div className="project-container">
        <img src="myfy-screenshot.png" />
        <div className="text-container right">
          <h2>My-Fy</h2>
          <p>
            The diesel advises the encouraged reporter within the appendix. My
            servant influences the sensible consultant into the economy. A
            project overflows behind a company. The hearing aspect absents the
            fiddling whale. How will the trial fool key the star?
          </p>
          <div className="code-label-container">
            <label>React.js</label>
            <label>Node.js</label>
            <label>Spotify Web API</label>
          </div>
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
      {renderProjectRight()}
    </div>
  );
};

export default MyProjects;
