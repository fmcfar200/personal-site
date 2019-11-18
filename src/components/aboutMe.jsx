import React from "react";
import "../styles/common.css";
import "../styles/aboutMe.css";
import Heading from "./heading";

const AboutMe = () => {
  return (
    <div id="about_me_section" className="about-container">
      <img className="headshot-image" src="headshot.jpg" alt="headshot"></img>
      <div className="info-container">
        <Heading number="01" title="About Me" />
        <p>
          Hello, I'm Fraser. I am a software development graduate based in
          Glasgow, Scotland who is passionate about building technological
          solutions for the internet, mobile apps and in the past computer
          games.
        </p>
        <p>
          Last year, i graduated from <span>Glasgow Caledonian University</span>{" "}
          with a <span>1st class</span> honours degree in Software Development.
          Since then i have been refining the programming and development skills
          by working on personal projects and some freelance work for small
          businesses.
        </p>
        <p>Here are some technologies i have been working with a lot:</p>
        <ul className="tech-list">
          <li className="tech-item">Java</li>
          <li className="tech-item">Android Studio</li>
          <li className="tech-item"> JavaScript (ES6)</li>
          <li className="tech-item">HTML\CSS</li>
          <li className="tech-item">React.js</li>
          <li className="tech-item">Xamarin</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
