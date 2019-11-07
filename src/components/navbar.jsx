import React from "react";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <ul>
        <li>
          <a href="#other_projects_section">
            <span>04. </span>Contact
          </a>
        </li>
        <li>
          <a href="#other_projects_section">
            <span>03. </span>Other Work
          </a>
        </li>
        <li>
          <a href="#my_projects_section">
            <span>02. </span>Projects
          </a>
        </li>
        <li>
          <a className="active" href="#about_me_section">
            <span>01. </span>About Me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
