import React from "react";
import AboutMe from "./components/aboutMe";
import MyProjects from "./components/myProjects";
import OtherProjects from "./components/otherProjects";
import NavBar from "./components/navbar";
import MobileNavbar from "./components/mobileNavbar";
import ContactMe from "./components/contactMe";
import "./App.css";
import Header from "./components/header";

function App() {
  return (
    <React.Fragment>
      <MobileNavbar />
      <Header />
      <NavBar />
      <main className="App">
        <AboutMe />
        <MyProjects />
        <OtherProjects />
        <ContactMe />
      </main>
      <footer>Built By Fraser McFarlane</footer>
    </React.Fragment>
  );
}

export default App;
