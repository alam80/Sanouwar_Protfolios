import React from "react";
import { styled } from "@mui/system";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// 🧩 Styled Components
const FooterContainer = styled("footer")(({ theme }) => ({
  backgroundColor: "#0d1b2a",
  color: "#ffffff",
  padding: "3rem 1.5rem 2rem",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
}));

const TopRow = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "wrap",
  maxWidth: "1200px",
  margin: "0 auto",
  gap: "2rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

const Column = styled("div")(({ theme }) => ({
  flex: 1,
  minWidth: "250px",
  padding: "1rem",
}));

const SectionTitle = styled("h3")({
  fontSize: "1.1rem",
  fontWeight: 600,
  marginBottom: "1rem",
  color: "#ffd54f",
});

const SectionItem = styled("li")({
  fontSize: "0.95rem",
  color: "#ccc",
  marginBottom: "0.6rem",
  lineHeight: 1.6,
  transition: "all 0.3s ease",
  listStyle: "none",
  "&:hover": {
    color: "#fff",
    transform: "translateX(5px)",
    cursor: "pointer",
  },
});

const CenterBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Title = styled("h2")({
  fontSize: "1.6rem",
  fontWeight: 700,
  color: "#ffd54f",
  marginBottom: "0.3rem",
  textAlign: "center",
});

const Subtitle = styled("p")({
  fontSize: "1rem",
  color: "#bbb",
  marginBottom: "1rem",
  textAlign: "center",
});

const SocialIcons = styled("div")({
  display: "flex",
  gap: "1.25rem",
  marginBottom: "1rem",
  "& a": {
    color: "#ffffff",
    fontSize: "1.6rem",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      color: "#ffd54f",
      transform: "scale(1.2)",
    },
  },
});

const BottomRow = styled("div")(({ theme }) => ({
  marginTop: "2rem",
  textAlign: "center",
  fontSize: "0.9rem",
  color: "#aaa",
  paddingTop: "1rem",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
}));

// 🚀 Footer Component
function Footer() {
  return (
    <FooterContainer>
      <TopRow>
        {/* Services Column */}
        <Column>
          <SectionTitle>Services</SectionTitle>
          <ul style={{ padding: 0 }}>
            <SectionItem>Website Development</SectionItem>
            <SectionItem>Mobile App Development</SectionItem>
            <SectionItem>SEO & Marketing</SectionItem>
          </ul>
        </Column>

        {/* Center Column: Social & Name */}
        <Column>
          <CenterBox>
            <SocialIcons>
              <a
                href="https://github.com/alam80"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/sanouwar12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
               
              </a>
            </SocialIcons>
            <Title>Sanouwar Alam</Title>
            <Subtitle>Full Stack Developer • MERN Stack</Subtitle>
          </CenterBox>
        </Column>

        {/* Contact Column */}
        <Column>
          <SectionTitle>Contact</SectionTitle>
          <ul style={{ padding: 0 }}>
            <SectionItem>Email: alamsanouwar@gmail.com</SectionItem>
            <SectionItem>Phone: +91-8294808902</SectionItem>
            <SectionItem>New Delhi, India</SectionItem>
          </ul>
        </Column>
      </TopRow>

      {/* Copyright */}
      <BottomRow>
        © {new Date().getFullYear()} Sanouwar Alam. All Rights Reserved.
      </BottomRow>
    </FooterContainer>
  );
}

export default Footer;
