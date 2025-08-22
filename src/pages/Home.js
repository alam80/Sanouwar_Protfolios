import React from "react";
import { Button, Typography } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ReactTyped } from "react-typed";



const blobAnimation = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-20px, 15px) scale(1.1); }
  100% { transform: translate(0, 0) scale(1); }
`;

const HeroSection = styled("section")(({ theme }) => ({
  minHeight: "90vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #1976d2, #e6ee9c)",
  position: "relative",
  overflow: "hidden",
  color: "#fff",
  textAlign: "center",
  padding: "0 1rem",
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    width: "350px",
    height: "350px",
    background: "radial-gradient(circle at 30% 30%, #42a5f5, transparent 70%)",
    borderRadius: "50%",
    filter: "blur(120px)",
    animation: `${blobAnimation} 10s ease-in-out infinite alternate`,
    zIndex: 0,
  },
  "&::after": {
    bottom: "-120px",
    right: "-120px",
    background: "radial-gradient(circle at 70% 70%, #64b5f6, transparent 70%)",
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: "70vh",
  },
}));

const HeroText = styled("div")(({ theme }) => ({
  maxWidth: "800px",
  zIndex: 1,
  "& h1": {
    fontSize: "3rem",
    fontWeight: 700,
    marginBottom: "1rem",
    "& span": {
      color: "#ffd54f",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  "& p": {
    fontSize: "1.3rem",
    marginBottom: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
}));

const ButtonGroup = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  flexWrap: "wrap",
  marginTop: "1rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    "& button": {
      width: "100%",
      maxWidth: "300px",
      margin: "0 auto",
    },
  },
}));

const SocialIcons = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "1.5rem",
  marginTop: "2rem",
  "& a": {
    color: "#fff",
    fontSize: "1.8rem",
    transition: "transform 0.3s, color 0.3s",
    "&:hover": {
      color: "#ffd54f",
      transform: "scale(1.2)",
    },
  },
}));

const FeaturesSection = styled("section")(({ theme }) => ({
  backgroundColor: "#f9f9f9",
  padding: "4rem 2rem",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "3rem 1rem",
  },
}));

const FeaturesGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "1.5rem",
  marginTop: "2rem",
}));

const FeatureCard = styled("div")(({ theme }) => ({
  background: "#fff",
  padding: "1.5rem",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
  },
}));

function Home() {
  return (
    <main>
      <HeroSection>
        <HeroText>
          <h1>
            Hi, I’m <span>Sanouwar Alam</span>
          </h1>
          <Typography variant="h5" sx={{ color: "#f4f4f4", mb: 2 }}>
            <ReactTyped
              strings={["MERN Stack Developer 💻", "Mobile App Developer 📱"]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </Typography>
          <p>
            I design and build modern, responsive web and mobile applications
            with a focus on performance, usability, and scalability.
          </p>

          <ButtonGroup>
            <Button
              variant="contained"
              size="large"
              sx={{ borderRadius: "25px", textTransform: "none" }}
              href="/contact"
            >
              Contact Me
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ borderRadius: "25px", textTransform: "none" }}
              href="/images/resume.pdf"
              target="_blank"
              download="Sanouwar_Alam_Resume.pdf"
            >
              Download Resume
            </Button>
          </ButtonGroup>

          <SocialIcons>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </SocialIcons>
        </HeroText>
      </HeroSection>

      <FeaturesSection>
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#333", mb: 3 }}>
          What I Do
        </Typography>
        <FeaturesGrid>
          <FeatureCard>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Frontend Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Building responsive and user-friendly interfaces with React.js and
              Material UI.
            </Typography>
          </FeatureCard>

          <FeatureCard>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Backend Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Creating secure APIs and databases using Node.js, Express, and
              MongoDB.
            </Typography>
          </FeatureCard>

          <FeatureCard>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Full-Stack Projects
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Delivering complete web solutions using the MERN stack for startups
              and businesses.
            </Typography>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
    </main>
  );
}

export default Home;
