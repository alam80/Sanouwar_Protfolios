import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";


function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobile(!isMobile);
  const closeMobileMenu = () => setIsMobile(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* 🔰 Logo */}
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          
          <span className="logo-text">Protfolios</span>
        </Link>

        {/* 📱 Hamburger */}
        <div className="menu-icon" onClick={toggleMobileMenu}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>

        {/* 🔗 Nav Links */}
        <nav className={isMobile ? "nav-menu active" : "nav-menu"}>
          {[
            { label: "Home", path: "/" },
            { label: "Services", path: "/services" },
            { label: "About", path: "/about" },
            { label: "Projects", path: "/projects" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          ))}

          <Link to="/contact" className="contact-btn" onClick={closeMobileMenu}>
            Contact Me
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
