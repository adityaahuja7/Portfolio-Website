import React from "react";


const Navbar = () => {
  return (
    <nav className="navbar select-none bg-rose-300 dark:bg-green-300 dark:shadow dark:shadow-inherit dark:shadow-300 transition-all duration-200">
      <div className="logo-container">
        <img src={require("./Icons/logo-steel.png")} className="logo" /> Aditya
        Ahuja
      </div>

      <ul className="navlist navbar-right">
        <li className="listitem ">
          <span>Projects</span>
        </li>
        <li className="listitem">
          <span>Resume</span>
        </li>
        <li className="listitem-logo">
          <img
            src="https://img.icons8.com/material-rounded/48/github.png"
            className="navlogo gh-logo"
          ></img>
        </li>
        <li className="listitem-logo">
          <img
            src="https://img.icons8.com/color/48/linkedin.png"
            className="navlogo lk-logo"
          ></img>
        </li>
        <li className="listitem-logo">
          <img
            src="https://img.icons8.com/color/48/gmail-new.png"
            className="navlogo gm-logo"
          ></img>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
