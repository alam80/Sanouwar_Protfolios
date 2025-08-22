import React from "react";
import { styled } from "@mui/system";
import { Typography, Box, Grid, Avatar } from "@mui/material";
import CountUp from "react-countup";

// 🌟 Styled Components
const AboutSection = styled("section")(({ theme }) => ({
  padding: "4rem 1.5rem",
  backgroundColor: "#fdfdfd",
  minHeight: "80vh",
  [theme.breakpoints.down("sm")]: {
    padding: "3rem 1rem",
  },
}));

const AboutContainer = styled(Grid)(({ theme }) => ({
  maxWidth: "1000px",
  margin: "0 auto",
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse", // 🔥 Image moves below text
  },
}));

const AboutImage = styled(Box)(({ theme }) => ({
  backgroundColor: "#e3f2fd",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
  },
}));

const AboutContent = styled(Box)(({ theme }) => ({
  padding: "2rem",
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem",
    textAlign: "center",
  },
}));

const CountersBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  marginTop: "2rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
}));

function About() {
  return (
    <AboutSection id="about">
      <AboutContainer container>
        {/* Right Side: Text */}
        <Grid item xs={12} md={7}>
          <AboutContent>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "primary.main",
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.4rem" },
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: { xs: "1rem", sm: "1.1rem" },
                lineHeight: 1.7,
              }}
            >
              Hi! I’m <strong>Sanouwar Alam</strong>, a passionate{" "}
              <strong>MERN Stack Developer</strong> & <strong>Mobile App Developer</strong>.
              I specialize in crafting modern, responsive web & mobile applications
              that focus on performance and usability. 
            </Typography>

            {/* Animated Counters */}
            <CountersBox>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "primary.main" }}
                >
                  <CountUp end={12} duration={2} />+
                </Typography>
                <Typography variant="subtitle1">Months Experience</Typography>
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "primary.main" }}
                >
                  <CountUp end={8} duration={2} />+
                </Typography>
                <Typography variant="subtitle1">Projects Completed</Typography>
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "primary.main" }}
                >
                  <CountUp end={5} duration={2} />+
                </Typography>
                <Typography variant="subtitle1">Happy Clients</Typography>
              </Box>
            </CountersBox>
          </AboutContent>
        </Grid>

        {/* Left Side: Image */}
        <Grid item xs={12} md={5}>
          <AboutImage>
            <Avatar
              src="/images/profile.jpg" // 👉 Replace with your image path
              alt="Sanouwar Alam"
              sx={{
                width: { xs: 150, md: 220 },
                height: { xs: 150, md: 220 },
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              }}
            />
          </AboutImage>
        </Grid>
      </AboutContainer>
    </AboutSection>
  );
}

export default About;
