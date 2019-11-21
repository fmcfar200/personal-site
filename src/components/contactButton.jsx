import React from "react";
import "../styles/contactMe.css";

const ContactButton = props => {
  var text = "Contact Me";
  var link = "mailto:fmcfar200@caledonian.ac.uk";
  props.text != undefined ? (text = props.text) : (text = text);
  props.link != undefined ? (link = props.link) : (link = link);
  return (
    <a className="contact_button" href={link} target="_blank">
      <span>{text}</span>
    </a>
  );
};

export default ContactButton;
