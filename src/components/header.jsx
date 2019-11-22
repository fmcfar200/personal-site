import React from "react";
import ContactButton from "./contactButton";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <p className="header-text-1">Hello, I'm</p>
        <p className="header-text-2">Fraser McFarlane.</p>
        <p className="header-text-3">
          I create software for the web, mobile devices and sometimes games
          technology.
        </p>
        <p className="header-text-4" style={{ marginBottom: "30px" }}>
          I am a Software Developer based in Glasgow, Scotland currently focused
          on developing mobile/web applications.
        </p>
        <ContactButton />
      </div>
    </div>
  );
};

export default Header;
