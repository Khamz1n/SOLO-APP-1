// src/components/SpeakingPart1.js
import React, { useState, useEffect } from 'react';
import { speakingPart1Questions } from '../data/speakingPart1Questions';
import { Button, Container, Typography, Box, Paper } from '@mui/material';
import HomeButton from './HomeButton';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function SpeakingPart1() {
  const [currentQuestion, setCurrentQuestion] = useState('');

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * speakingPart1Questions.length);
    setCurrentQuestion(speakingPart1Questions[randomIndex]);
  };

  useEffect(() => {
    getRandomQuestion();
  }, []);

  return (
    <Container maxWidth="md">
      <HomeButton />
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            mb: 6
          }}
        >
          IELTS Speaking Part 1
        </Typography>

        <Paper
          elevation={2}
          sx={{
            p: 4,
            mb: 4,
            background: '#ffffff',
            border: '2px solid #2196F3',
            borderRadius: 2,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 4px 20px rgba(33, 150, 243, 0.15)'
            }
          }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 500,
              color: '#1976D2'
            }}
          >
            {currentQuestion}
          </Typography>
        </Paper>

        <Paper 
          elevation={1} 
          sx={{ 
            p: 3, 
            mb: 4, 
            bgcolor: '#f5f5f5',
            borderLeft: '3px solid #ff9800',
            opacity: 0.9
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <LightbulbIcon sx={{ color: '#ff9800', mr: 1 }} />
            <Typography variant="h6" component="h2" color="primary">
              Tip for Extended Answers
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ textAlign: 'left' }}>
            Try to give extended answers with approximately 3-4 sentences. This will help you:
          </Typography>
          <Box component="ul" sx={{ textAlign: 'left', mt: 1 }}>
            <Typography component="li">Demonstrate your fluency</Typography>
            <Typography component="li">Show your vocabulary range</Typography>
            <Typography component="li">Express your ideas more fully</Typography>
          </Box>
        </Paper>

        <Button 
          variant="contained" 
          color="primary" 
          onClick={getRandomQuestion}
          sx={{ 
            mt: 4,
            background: '#2196F3',
            '&:hover': {
              background: '#1976D2',
            }
          }}
        >
          Get Another Question
        </Button>
      </Box>
    </Container>
  );
}

export default SpeakingPart1;