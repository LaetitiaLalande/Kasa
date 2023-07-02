import React from "react";
import "../pages/Home/Home.scss";
import LogoFooter from '../assets/images/logoFooter.png'

const Footer = () => {
  return (
    <div className="footerContainer">
      <img src={LogoFooter} alt="logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
