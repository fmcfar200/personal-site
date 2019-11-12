import React from "react";
import "../styles/navbar.css";
import "../styles/navOverlay.css";

const MobileNavbar = () => {
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("menuButton").style.opacity = "0%";
  }
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("menuButton").style.opacity = "100%";
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
          <a href="#" onClick={() => closeNav()}>
            Contact Me
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
