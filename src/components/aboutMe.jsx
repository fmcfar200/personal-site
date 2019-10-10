import React from "react";
import "../styles/common.css";
import "../styles/aboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      <img className="headshot-image" src="headshot.jpg" alt="headshot"></img>
      <div className="info-container">
        <div className="sub-header">
          <h3>01. About Me</h3>
          <div className="line"></div>
        </div>
        <p>
          hello my name is fraser, this is placeholder text for my personal
          website. So please ignore cause theres really no point reading this
          because its pretty much a load of gibberish.
        </p>
        <p>
          hello my name is fraser, this is placeholder text for my personal
          website. So please ignore cause theres really no point reading this
          because its pretty much a load of gibberish.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
