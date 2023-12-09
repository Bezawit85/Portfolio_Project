import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import elite from "../images/elite.png";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo"  style={{marginTop:"5px"}}>
          <img src={elite} alt="elite" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#testimonials" onClick={closeMenu}>
              Ventures
            </a>
          </li>
          <li className="nav-item">
            <a href="#demo" onClick={closeMenu}>
              KHUB
            </a>
          </li>
          <li className="nav-item">
            <a href="#form" onClick={closeMenu}>
              Registration
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
