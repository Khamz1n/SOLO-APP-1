// src/components/SpeakingPart1.js
import React, { useState, useEffect } from 'react';
import { speakingPart1Questions } from '../data/speakingPart1Questions';
import { Button, Container, Typography, Box } from '@mui/material';
import HomeButton from './HomeButton';

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
        <Typography variant="h4" component="h1" gutterBottom>
          IELTS Speaking Part 1
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
          {currentQuestion}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={getRandomQuestion}
          sx={{ mt: 4 }}
        >
          Get Another Question
        </Button>
      </Box>
    </Container>
  );
}

export default SpeakingPart1;