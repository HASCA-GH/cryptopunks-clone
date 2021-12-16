import React from "react";
import "./Header.css";
import punklogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      {/* <h2>i AM THE hEADER 🚀🖥️</h2> */}
      <div class="logoContainer">
        <img src={punklogo} className="punklogo" alt="Punk Logo" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="Search Icon" />
        </div>
        <input
          className="searchInput"
          placeholder="Colletion, item or user ..."
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} alt="Switch icon" />
        </div>
      </div>
      <div className="loginButton">
        <button>GET IN</button>
      </div>
    </div>
  );
};

export default Header;
