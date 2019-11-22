import React from "react";
import "../styles/navbar.css";
import "../styles/navOverlay.css";
import ContactButton from "./contactButton";

const MobileNavbar = () => {
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("menuButton").classList.add("fade-out-trans");
  }
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("menuButton").classList.remove("fade-out-trans");
  }

  return (
    <React.Fragment>
      <div id="myNav" className="overlay">
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={() => closeNav()}
        >
          &times;
        </a>
        <div className="overlay-content">
          <a href="#about_me_section" onClick={() => closeNav()}>
            About Me
          </a>
          <a href="#my_projects_section" onClick={() => closeNav()}>
            My Projects
          </a>
          <a href="#other_projects_section" onClick={() => closeNav()}>
            Other Work
          </a>
          <a href="#contact_section" onClick={() => closeNav()}>
            Contact Me
          </a>
          <a
            href="/FRASER MCFARLANE CV.pdf"
            target="_blank"
            onClick={() => closeNav()}
          >
            CV
          </a>
        </div>
      </div>

      <div className="nav-container mobile">
        <ul>
          <li>
            <button
              id="menuButton"
              className="menuButton"
              onClick={() => openNav()}
            >
              <i className="fas fa-bars"></i>
            </button>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default MobileNavbar;
