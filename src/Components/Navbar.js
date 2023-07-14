import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar select-none shadow drop-shadow-md bg-secondary-navbar1 dark:bg-secondary-navbar2">
      <div className="logo-container">Aditya Ahuja</div>

      <ul className="navlist navbar-right">
        <li className="listitem ">
          <Link to="/Projects">
            <span>Projects</span>
          </Link>
        </li>
        <li className="listitem">
          <Link to="/">
            <span>Resume</span>
          </Link>
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
