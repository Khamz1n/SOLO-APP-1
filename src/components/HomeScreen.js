// src/components/HomeScreen.js
import React from 'react';
import { Container, Typography, Grid, Paper, Box, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import CreateIcon from '@mui/icons-material/Create';

function HomeScreen() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = [
    {
      title: 'Learn MHV',
      description: 'Master must-have vocabulary for IELTS success',
      icon: <SchoolIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />,
      path: '/learn-mvh',
      color: '#2196f3'
    },
    {
      title: 'Speaking Part 1',
      description: 'Practice basic conversation questions',
      icon: <RecordVoiceOverIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />,
      path: '/speaking-part1',
      color: '#ff4081'
    },
    {
      title: 'Speaking Part 2',
      description: 'Practice longer speaking tasks',
      icon: <RecordVoiceOverIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />,
      path: '/speaking-part2',
      color: '#ff4081'
    },
    {
      title: 'Writing Part 2',
      description: 'Practice essay writing tasks',
      icon: <CreateIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />,
      path: '/writing-part2',
      color: '#2196f3'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
      <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6, md: 8 } }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            background: 'linear-gradient(45deg, #2196f3, #ff4081)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          SOLO IELTS Preparation
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          paragraph
          sx={{ 
            maxWidth: '600px', 
            mx: 'auto',
            fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
            px: { xs: 2, sm: 0 }
          }}
        >
          Master IELTS with comprehensive practice in speaking and writing
        </Typography>
      </Box>

      <Grid 
        container 
        spacing={4}
        alignItems="stretch"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
          gap: { xs: 2, sm: 3, md: 4 },
          alignItems: 'stretch',
          '& > .MuiGrid-item': {
            width: '100%',
            margin: 0
          }
        }}
      >
        {menuItems.map((item, index) => (
          <Grid item key={index}>
            <Link 
              to={item.path} 
              style={{ 
                textDecoration: 'none',
                height: '100%',
                display: 'block'
              }}
            >
              <Paper
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 4,
                  borderRadius: 2,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: isMobile ? 'none' : 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  },
                  '&:active': {
                    transform: isMobile ? 'scale(0.98)' : 'none',
                  }
                }}
              >
                <Box sx={{ 
                  color: item.color,
                  mb: 3
                }}>
                  {item.icon}
                </Box>
                <Typography 
                  variant="h5" 
                  component="h2" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 600,
                    textAlign: 'center',
                    fontSize: { xs: '1.25rem', sm: '1.4rem', md: '1.5rem' },
                    mb: 2
                  }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  align="center"
                  sx={{ 
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
                  }}
                >
                  {item.description}
                </Typography>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomeScreen;