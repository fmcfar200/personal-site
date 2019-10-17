import React from "react";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <ul>
      <li>
        <a class="active" href="#about_me_section">
          About Me
        </a>
      </li>
      <li>
        <a href="#my_projects_section">Projects</a>
      </li>
      <li>
        <a href="#other_projects_section">Other Work</a>
      </li>
    </ul>
  );
};

export default NavBar;
