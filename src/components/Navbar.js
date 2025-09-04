import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { styled } from "@mui/system";

// Styled Components
const Header = styled("header")({
  width: "100%",
  background: "#0d1b2a",
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  position: "sticky",
  top: 0,
  zIndex: 100,
});

const Container = styled("div")({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0.5rem 1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Logo = styled(Link)({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "#ffd54f",
  fontWeight: 700,
  fontSize: "1.5rem",
  letterSpacing: "1px",
  "& .logo-text": {
    marginLeft: "4px",
  },
});

const MenuIcon = styled("div")(({ theme }) => ({
  display: "none",
  fontSize: "2rem",
  color: "#ffd54f",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const NavMenu = styled("nav")(({ theme, mobile }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  [theme.breakpoints.down("md")]: {
    position: "absolute",
    top: "64px",
    left: 0,
    width: "100%",
    background: "#0d1b2a",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.2rem",
    padding: mobile ? "2rem 0" : 0,
    transition: "max-height 0.3s",
    maxHeight: mobile ? "400px" : "0",
    overflow: "hidden",
    boxShadow: mobile ? "0 8px 24px rgba(0,0,0,0.08)" : "none",
    zIndex: 99,
  },
}));

const NavLinkStyled = styled(Link)(({ theme }) => ({
  color: "#fff",
  textDecoration: "none",
  fontSize: "1.05rem",
  fontWeight: 500,
  padding: "0.3rem 0.7rem",
  borderRadius: "4px",
  transition: "background 0.2s, color 0.2s",
  "&.active": {
    color: "#ffd54f",
    background: "rgba(255,213,79,0.08)",
  },
  "&:hover": {
    color: "#ffd54f",
    background: "rgba(255,213,79,0.08)",
  },
}));

const ContactBtn = styled(Link)(({ theme }) => ({
  background: "#ffd54f",
  color: "#0d1b2a",
  fontWeight: 600,
  borderRadius: "20px",
  padding: "0.4rem 1.2rem",
  marginLeft: "0.5rem",
  textDecoration: "none",
  transition: "background 0.2s, color 0.2s",
  "&:hover": {
    background: "#fff176",
    color: "#0d1b2a",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
  },
}));

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobile(!isMobile);
  const closeMobileMenu = () => setIsMobile(false);

  return (
    <Header>
      <Container>
        {/* Logo */}
        <Logo to="/" onClick={closeMobileMenu}>
          <span className="logo-text">Protfolios</span>
        </Logo>

        {/* Hamburger */}
        <MenuIcon onClick={toggleMobileMenu}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </MenuIcon>

        {/* Nav Links */}
        <NavMenu mobile={isMobile}>
          {[
            { label: "Home", path: "/" },
            { label: "Services", path: "/services" },
            { label: "About", path: "/about" },
            { label: "Projects", path: "/projects" },
          ].map((item, index) => (
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
