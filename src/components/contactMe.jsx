import React from "react";
import Heading from "./heading";
import "../styles/contactMe.css";

const ContactMe = () => {
  return (
    <div id="contact_section" className="contact_container">
      <div className="contact_content">
        <h4>
          <span>04. </span>What Now?
        </h4>
        <h2>Please Get In Touch</h2>
        <p>
          I am currently looking for a Graduate role in Software Development. I
          am also working as a freelance developer. So please feel free to
          contact me about any opportunities or just to say hello!
        </p>
        <button className="contact_button">
          <span>Contact Me</span>
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
