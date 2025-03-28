// src/components/WritingPart2.js
import React, { useState, useEffect } from 'react';
import { writingPart2Questions } from '../data/writingPart2Questions';
import { Button, Container, Typography, Box, Paper } from '@mui/material';
import HomeButton from './HomeButton';

function WritingPart2() {
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * writingPart2Questions.length);
    setCurrentQuestion(writingPart2Questions[randomIndex]);
  };

  useEffect(() => {
    getRandomQuestion();
  }, []);

  return (
    <Container maxWidth="md">
      <HomeButton />
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          IELTS Writing Part 2
        </Typography>
        {currentQuestion && (
          <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Question Type: {currentQuestion.type}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {currentQuestion.question}
            </Typography>
          </Paper>
        )}
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

export default WritingPart2;