import React from "react";
import banner from "../images/banner.png";
import "./Header.css";

// import allocine from "https://assets.allocine.fr/skin/img/allocine/logo-main-5f12bf0a15.svg";

const Header = () => {
  return (
    <>
      <header>
        <img src={banner} alt="allocine" className="banner" />
      </header>
    </>
  );
};
export default Header;
