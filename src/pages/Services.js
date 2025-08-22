import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
  Chip,
  useTheme,
} from '@mui/material';
import { styled, keyframes } from '@mui/system';

// Import local images from assets folder
import webDesignImg from '../assets/mern.png';
import mobileAppImg from '../assets/react.png';
import digitalMarketingImg from '../assets/marketing.png';

// ✨ Smooth gradient glow animation
const glowAnimation = keyframes`
  0% {
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 0 8px 30px rgba(255, 255, 255, 0.3);
  }
  100% {
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
  }
`;

// 🌟 Container
const ServicesContainer = styled('div')(({ theme }) => ({
  padding: '4rem 1.5rem',
  background: 'linear-gradient(135deg, #e0f7fa, #f1f8e9)',
  [theme.breakpoints.down('sm')]: {
    padding: '2rem 1rem',
  },
}));

// 🌟 Glassmorphism Card
const GlassCard = styled(Card)(({ theme }) => ({
  height: '430px',
  borderRadius: '20px',
  background: 'rgba(255, 255, 255, 0.15)',
  boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.4s ease-in-out',
  overflow: 'hidden',

  '&:hover': {
    transform: 'scale(1.05)',
    animation: `${glowAnimation} 4s infinite ease-in-out alternate`,
    background: 'rgba(255, 255, 255, 0.2)',
  },

  [theme.breakpoints.down('sm')]: {
    height: '400px',
  },
}));

const services = [
  {
    title: 'Web Design & Development',
    description: 'Beautiful, responsive websites tailored to your brand.',
    features: ['React.js', 'Next.js', 'MongoDB', 'Node.js', 'Express.js',],
    image: webDesignImg,
    learnMore: '#',
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform apps with amazing performance.',
    features: ['React Native', 'Redux', 'APIs'],
    image: mobileAppImg,
    learnMore: '#',
  },
  {
    title: 'Digital Marketing',
    description: 'Grow your business with smart marketing campaigns.',
    features: ['SEO', 'Ads', 'Social Media'],
    image: digitalMarketingImg,
    learnMore: '#',
  },
];

function Services() {
  const theme = useTheme();

  return (
    <ServicesContainer id="services">
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: '700',
          mb: 4,
          textAlign: 'center',
          color: theme.palette.primary.main,
          fontSize: { xs: '1.6rem', sm: '2rem', md: '2.2rem' },
        }}
      >
        Our Services
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <GlassCard>
              <CardMedia
                component="img"
                height="160"
                image={service.image}
                alt={service.title}
                sx={{
                  objectFit: 'cover',
                  borderRadius: '20px 20px 0 0',
                }}
              />
              <CardContent sx={{ flexGrow: 1, p: 2 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                    color: '#333',
                  }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {service.description}
                </Typography>
                <div
                  style={{
                    marginBottom: '0.5rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                >
                  {service.features.map((feature, i) => (
                    <Chip
                      key={i}
                      label={feature}
                      size="small"
                      sx={{
                        mr: 0.5,
                        mb: 0.5,
                        backdropFilter: 'blur(6px)',
                        backgroundColor: 'rgba(255,255,255,0.3)',
                        color: '#000',
                        fontWeight: 500,
                      }}
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </div>
              </CardContent>
              <div
                style={{
                  padding: '0.8rem',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  href={service.learnMore}
                  target="_blank"
                  sx={{
                    borderRadius: '30px',
                    px: 3,
                  }}
                >
                  Learn More
                </Button>
              </div>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </ServicesContainer>
  );
}

export default Services;
