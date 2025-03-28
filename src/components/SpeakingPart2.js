// src/components/SpeakingPart2.js
import React, { useState, useEffect } from 'react';
import { speakingPart2Questions } from '../data/speakingPart2Questions';
import { Button, Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import HomeButton from './HomeButton';

function SpeakingPart2() {
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * speakingPart2Questions.length);
    setCurrentQuestion(speakingPart2Questions[randomIndex]);
  };

  useEffect(() => {
    getRandomQuestion();
  }, []);

  return (
    <Container maxWidth="md">
      <HomeButton />
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          IELTS Speaking Part 2
        </Typography>
        {currentQuestion && (
          <>
            <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
              {currentQuestion.title}
            </Typography>
            <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 2 }}>
              You should say:
            </Typography>
            <List>
              {currentQuestion.points.map((point, index) => (
                <ListItem key={index}>
                  <ListItemText primary={point} />
                </ListItem>
              ))}
            </List>
          </>
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

export default SpeakingPart2;