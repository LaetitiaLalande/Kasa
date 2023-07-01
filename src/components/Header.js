import React from "react";
import { Link } from "react-router-dom";
import "../pages/Home/Home.scss"

const Header = () => {
  return (
    <nav className="navContainer">
      <img src="logo.png" alt="logo Kasa" />
      <div className="navHeader">
      <Link to="/">Accueil</Link>
      <Link to="/About">A propos</Link>
      </div>
    </nav>
  );
};

export default Header;
