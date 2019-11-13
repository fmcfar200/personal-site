import React from "react";
import AboutMe from "./components/aboutMe";
import MyProjects from "./components/myProjects";
import OtherProjects from "./components/otherProjects";
import NavBar from "./components/navbar";
import MobileNavbar from "./components/mobileNavbar";
import "./App.css";
import Heading from "./components/heading";
import ContactMe from "./components/contactMe";

function App() {
  return (
    <React.Fragment>
      <MobileNavbar />
      <div className="header">
        <p className="header-text-1">Hello, I'm</p>
        <p className="header-text-2">Fraser McFarlane.</p>
        <p className="header-text-3">
          I create software for the web, mobile devices and sometimes games
        </p>
        <p className="header-text-4">
          I am a Software Developer based in Glasgow, Scotland currently focused
          on developing mobile/web applications.
        </p>
      </div>
      <NavBar />
      <main className="App">
        <AboutMe />
        <MyProjects />
        <OtherProjects />
        <ContactMe />
      </main>
    </React.Fragment>
  );
}

export default App;
