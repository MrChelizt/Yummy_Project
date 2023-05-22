import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/chef.png";

import "./Component.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="title">
        <img src={Logo} alt="logo" />
        <div>Yummy</div>
      </div>
      <div className="menu">
        <Link to="/" className="menuItem">
          <div>Home</div>
        </Link>
        <Link to="/recipes" className="menuItem">
          <div>Recipes</div>
        </Link>
        <Link to="/favorites" className="menuItem">
          <div>Favorites</div>
        </Link>
        <Link to="/contact" className="menuItem">
          <div>Contact</div>
        </Link>
      </div>
    </div>
  );
}
