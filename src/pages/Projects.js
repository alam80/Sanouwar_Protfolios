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
import { styled } from '@mui/system';

// Images (local)
import foodImg from '../assets/food.png';
import fitnessImg from '../assets/fitness.png';
import financeImg from '../assets/finance.png';
import ecommerceImg from '../assets/ecommerce.png';

// 🌟 Container styling
const AppContainer = styled('section')(({ theme }) => ({
  padding: '4rem 1.5rem',
  backgroundColor: '#fafafa',
  [theme.breakpoints.down('sm')]: {
    padding: '2rem 1rem',
  },
}));

// ✨ Styled Card with smooth hover animation
const AppCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '14px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
  },
}));

// App project data
const appProjects = [
  {
    title: 'Food Delivery App',
    description: 'React Native app for real-time food delivery tracking.',
    tech: ['React Native', 'Firebase', 'Google Maps API'],
    image: foodImg,
    demo: '#',
    code: '#',
  },
  {
    title: 'Fitness Tracker',
    description: 'Mobile app to track workouts and diet plans.',
    tech: ['React Native', 'Redux', 'MongoDB', 'Node.js', 'Express.js'],
    image: fitnessImg,
    demo: '#',
    code: '#',
  },
  {
    title: 'Finance Manager',
    description: 'Helps users manage expenses and investments securely.',
    tech: ['React Native', 'Redux', 'MongoDB', 'Node.js', 'Express.js'],
    image: financeImg,
    demo: '#',
    code: '#',
  },
  {
    title: 'E-Commerce',
    description: 'Responsive mobile commerce interface with cart and checkout.',
    tech: ['React.js', 'Redux', 'Stripe API'],
    image: ecommerceImg,
    demo: '#',
    code: '#',
  },
];

function AppProjects() {
  const theme = useTheme();

  return (
    <AppContainer id="app-projects">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          mb: 6,
          color: theme.palette.primary.main,
          fontSize: { xs: '1.6rem', sm: '2rem', md: '2.2rem' },
        }}
      >
        Mobile & Web Applications
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {appProjects.map((app, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <AppCard>
              <CardMedia
                component="img"
                height="160"
                image={app.image}
                alt={app.title}
                sx={{
                  objectFit: 'cover',
                  borderTopLeftRadius: '14px',
                  borderTopRightRadius: '14px',
                }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: '#333', mb: 1 }}
                >
                  {app.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {app.description}
                </Typography>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '1rem',
                  }}
                >
                  {app.tech.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size="small"
                      variant="outlined"
                      color="primary"
                      sx={{
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        borderRadius: '6px',
                        backgroundColor: 'rgba(0, 0, 255, 0.04)',
                      }}
                    />
                  ))}
                </div>
              </CardContent>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  padding: '1rem',
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  href={app.demo}
                  target="_blank"
                >
                  Demo
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  href={app.code}
                  target="_blank"
                >
                  Code
                </Button>
              </div>
            </AppCard>
          </Grid>
        ))}
      </Grid>
    </AppContainer>
  );
}

export default AppProjects;
