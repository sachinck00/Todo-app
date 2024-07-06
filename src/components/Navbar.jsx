import React from "react";
import "../App.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";

const Navbar = ({ header }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleTheme = (checked) => {
    const navBar = document.getElementsByClassName("nav");
    const body = document.getElementsByClassName("body");
    const wrapper = document.getElementsByTagName("body");
    
    if (checked) {
      navBar[0].style.color = "var(--white)";
      navBar[0].style.backgroundColor = "var(--db)";
      body[0].style.color = "var(--white)";
      body[0].style.backgroundColor = "var(--db)";
      wrapper[0].style.color = "var(--white)";
      wrapper[0].style.backgroundColor = "var(--db)";
    } else {
      navBar[0].style.color = "var(--db)";
      navBar[0].style.backgroundColor = "var(--white)";
      body[0].style.color = "var(--db)";
      body[0].style.backgroundColor = "var(--white)";
      wrapper[0].style.color = "var(--db)";
      wrapper[0].style.backgroundColor = "var(--white)";
    }
  };

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    handleTheme(checked);
  };

  return (
    <div className="nav">
      <div className="header">
        <span>{header}</span>
      </div>
      <div className="ul">
        <a href="#">Home</a>
        <a href="#">About</a>

        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}
          className="theme-btn"
        />
      </div>
    </div>
  );
};

export default Navbar;
