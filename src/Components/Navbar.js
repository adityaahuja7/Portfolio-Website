import React from "react";

const Navbar = () => {
  return (
    <div class="top wrapper">
      <div class="main-header">
        <nav class="navbar">
          <div class="logo-text">Aditya Ahuja</div>
          <ul class="navlist navbar-right">
            <li class="listitem">
              <span>Projects</span>
            </li>
            <li class="listitem">
              <span>Resume</span>
            </li>
            <li class="listitem-logo">
              <img src = "https://img.icons8.com/material-rounded/48/github.png"
                class="navlogo gh-logo"
              ></img>
            </li>
            <li class="listitem-logo">
              <img src="https://img.icons8.com/color/48/linkedin.png" class="navlogo lk-logo"></img>
            </li>
            <li class="listitem-logo">
              <img src="https://img.icons8.com/color/48/gmail-new.png" class="navlogo gm-logo"></img>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
