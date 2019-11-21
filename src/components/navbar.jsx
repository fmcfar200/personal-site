import React from "react";
import Scrollspy from "react-scrollspy";
import ContactButton from "./contactButton";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="nav-container largeScreen">
      <ContactButton text="CV" link="/FRASER MCFARLANE CV.pdf" />
      <Scrollspy
        items={[
          "contact_section",
          "other_projects_section",
          "my_projects_section",
          "about_me_section"
        ]}
        currentClassName="active"
      >
        <li>
          <a href="#contact_section">
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
          <a href="#about_me_section">
            <span>01. </span>About Me
          </a>
        </li>
      </Scrollspy>
    </div>
  );
};

export default NavBar;
