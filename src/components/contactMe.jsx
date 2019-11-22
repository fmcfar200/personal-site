import React from "react";
import Heading from "./heading";
import "../styles/contactMe.css";
import ContactButton from "./contactButton";

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
        <ContactButton />
        <div className="social-container">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/fraser-mcfarlane-40b7bb106/"
            className="fa fa-linkedin"
          ></a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/FRASER MCFARLANE CV.pdf"
            className="fa fa-address-book"
          ></a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/fmcfar200"
            className="fa fa-github"
          ></a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/f_mcfarlane/"
            className="fa fa-instagram"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
