import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.scss";
import LogoKasa from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="navContainer">
      <img src={LogoKasa} alt="logo Kasa" className="LogoKasa" />
      <nav className="navHeader">
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "navActive" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={(nav) => (nav.isActive ? "navActive" : "")}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
