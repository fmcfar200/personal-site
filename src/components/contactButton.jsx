import React from "react";
import "../styles/contactMe.css";

const ContactButton = props => {
  var text = "Contact Me";
  props.text != undefined ? (text = props.text) : (text = "Contact Me");
  return (
    <a className="contact_button" href="mailto:fmcfar200@caledonian.ac.uk">
      <span>{text}</span>
    </a>
  );
};

export default ContactButton;
