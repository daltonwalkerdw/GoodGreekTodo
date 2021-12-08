import React from "react";
import Logo from "../Images/GGLogo.png";

const Header = () => {
  return (
    <header>
      <div className="logoContainer">
        <img src={Logo} alt="GoodGreekLogo" />
      </div>
    </header>
  );
};

export default Header;
