import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
<<<<<<< HEAD
    <nav className="navbar sticky top-0 z-50 w-full select-none shadow drop-shadow-md backdrop-blur-md bg-opacity-10 bg-secondary-navbar1 dark:bg-secondary-navbar3 dark:bg-opacity-50 transition-all duration-100 ease-linear">
      <div className="container flex flex-row items-center justify-between w-11/12 md:w-3/5 ">
        <div className="logo-container mb-0.5 text-xl md:text-3xl">
          <NavLink to = "/">Aditya Ahuja</NavLink>
        </div>
        <ul className="navlist navbar-right space-x-4 md:space-x-10 ">
          <li className="listitem text-sm md:text-xl">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "text-orange-800 dark:text-cyan-400" : ""
              }
            >
              <span>About</span>
            </NavLink>
          </li>
          <li className="listitem text-sm md:text-xl">
            <NavLink
              to="/Projects"
              className={({ isActive, isPending }) =>
                isActive ? "text-orange-800 dark:text-cyan-400" : ""
              }
            >
              <span>Projects</span>
            </NavLink>
          </li>
          <li className="listitem text-sm md:text-xl">
            <NavLink
              to="/Resume"
              className={({ isActive, isPending }) =>
                isActive ? "text-orange-800 dark:text-cyan-400" : ""
              }
            >
              <span>Resume</span>
            </NavLink>
          </li>
        </ul>
      </div>
=======
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
>>>>>>> 10f9964083fce957c7fdf4ed5c26326b786a66fc
    </nav>
  );
};

export default Navbar;
