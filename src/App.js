import React from "react";
import AboutMe from "./components/aboutMe";
import MyProjects from "./components/myProjects";
import "./App.css";
import OtherProjects from "./components/otherProjects";
import NavBar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="App">
        <AboutMe />
        <MyProjects />
        <OtherProjects />
      </main>
    </React.Fragment>
  );
}

export default App;
