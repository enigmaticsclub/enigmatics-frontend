import React from "react";

import { images } from "../../constants";

import "./NavigationBar.scss";

const NavigationBar = () => {
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.dark_logo} alt="logo" />
        <h1>
          <span>Enigmatic</span> Club
        </h1>
      </div>
      <div className="app__navbar-menu">
        <li>Home</li>
      </div>
    </div>
  );
};

export default NavigationBar;
