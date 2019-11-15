import React from "react";
import "../styles/common.css";
import "../styles/aboutMe.css";
import Heading from "./heading";

const AboutMe = () => {
  return (
    <div id="about_me_section" className="about-container">
      <img className="headshot-image" src="headShot.jpg" alt="headshot"></img>
      <div className="info-container">
        <Heading number="01" title="About Me" />
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
