import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { styled } from "@mui/system";

// ✅ Centralized colors (easy to update later)
const COLORS = {
  primary: "#0d1b2a",
  accent: "#ffd54f",
  accentHover: "#fff176",
  text: "#ffffff",
};

// ==================== Styled Components ====================
const Header = styled("header")({
  width: "100%",
  background: COLORS.primary,
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  position: "sticky",
  top: 0,
  zIndex: 100,
});

const Container = styled("div")({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0.75rem 1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Logo = styled(Link)({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: COLORS.accent,
  fontWeight: 800,
  fontSize: "1.6rem",
  letterSpacing: "1px",
  "&:hover": {
    opacity: 0.9,
  },
});

const MenuIcon = styled("button")(({ theme }) => ({
  display: "none",
  fontSize: "2rem",
  color: COLORS.accent,
  cursor: "pointer",
  background: "transparent",
  border: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const NavMenu = styled("nav")(({ theme, mobile }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  transition: "all 0.3s ease-in-out",
  [theme.breakpoints.down("md")]: {
    position: "absolute",
    top: "64px",
    left: 0,
    width: "100%",
    background: COLORS.primary,
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    padding: mobile ? "2rem 0" : "0",
    maxHeight: mobile ? "400px" : "0",
    overflow: "hidden",
    boxShadow: mobile ? "0 8px 24px rgba(0,0,0,0.1)" : "none",
    zIndex: 99,
  },
}));

const NavLinkStyled = styled(Link)(({ theme }) => ({
  color: COLORS.text,
  textDecoration: "none",
  fontSize: "1.05rem",
  fontWeight: 500,
  padding: "0.4rem 0.8rem",
  borderRadius: "6px",
  transition: "background 0.2s, color 0.2s",
  "&.active": {
    color: COLORS.accent,
    background: "rgba(255,213,79,0.12)",
  },
  "&:hover": {
    color: COLORS.accent,
    background: "rgba(255,213,79,0.12)",
  },
}));

const ContactBtn = styled(Link)(({ theme }) => ({
  background: COLORS.accent,
  color: COLORS.primary,
  fontWeight: 600,
  borderRadius: "24px",
  padding: "0.5rem 1.3rem",
  marginLeft: "0.5rem",
  textDecoration: "none",
  transition: "background 0.2s, transform 0.2s",
  "&:hover": {
    background: COLORS.accentHover,
    transform: "translateY(-2px)",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
  },
}));

// ==================== Component ====================
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobile(!isMobile);
  const closeMobileMenu = () => setIsMobile(false);

  // ✅ Extract nav links (easy to manage / expand later)
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
  ];

  return (
    <Header>
      <Container>
        {/* Logo */}
        <Logo to="/" onClick={closeMobileMenu}>
          Sanouwar
        </Logo>

        {/* Hamburger Icon */}
        <MenuIcon
          aria-label="Menu"
          aria-expanded={isMobile}
          onClick={toggleMobileMenu}
        >
          {isMobile ? <FaTimes /> : <FaBars />}
        </MenuIcon>

        {/* Navigation Links */}
        <NavMenu mobile={isMobile} aria-label="Main Navigation">
          {navLinks.map((item, index) => (
            <NavLinkStyled
              key={index}
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
              onClick={closeMobileMenu}
            >
              {item.label}
            </NavLinkStyled>
          ))}
          <ContactBtn to="/contact" onClick={closeMobileMenu}>
            Contact Me
          </ContactBtn>
        </NavMenu>
      </Container>
    </Header>
  );
}

export default Navbar;
