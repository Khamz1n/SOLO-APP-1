// src/components/SpeakingPart2.js
import React, { useState } from 'react';
import { Container, Typography, Button, Paper, Box } from '@mui/material';
import HomeButton from './HomeButton';
import Timer from './Timer';

// Sample questions - you can expand this list
const questions = [
  {
    title: "Describe a time when you helped someone",
    points: [
      "Who you helped",
      "How you helped them",
      "Why you helped them",
      "How you felt about helping"
    ]
  },
  {
    title: "Describe a place you like to visit",
    points: [
      "Where it is",
      "When you go there",
      "What you do there",
      "Why you like it"
    ]
  },
  {
    title: "Describe a skill you want to learn",
    points: [
      "What the skill is",
      "Why you want to learn it",
      "How you plan to learn it",
      "How you feel about learning new skills"
    ]
  },
  // Add more questions here
];

function SpeakingPart2() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showTimer, setShowTimer] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
    setShowTimer(true);
    setTimerKey(prevKey => prevKey + 1);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <HomeButton />
      <Typography variant="h2" component="h1" align="center" gutterBottom
        sx={{
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          mb: 6
        }}>
        Speaking Part 2
      </Typography>

      {!currentQuestion && (
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Button 
            variant="contained" 
            size="large"
            onClick={getRandomQuestion}
            sx={{
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              color: 'white',
              px: 4,
              py: 2
            }}
          >
            Get Random Question
          </Button>
        </Box>
      )}

      {currentQuestion && (
        <>
          {showTimer && <Timer 
            onPreparationEnd={() => console.log('Preparation ended')} 
            resetKey={timerKey}
          />}
          
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2, bgcolor: 'rgba(255, 255, 255, 0.9)' }}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              {currentQuestion.title}
            </Typography>
            
            <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3, color: '#666' }}>
              You should say:
            </Typography>
            
            <Box component="ul" sx={{ mt: 2 }}>
              {currentQuestion.points.map((point, index) => (
                <Typography component="li" key={index} sx={{ mb: 1 }}>
                  {point}
                </Typography>
              ))}
            </Box>
          </Paper>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button 
              variant="contained"
              onClick={getRandomQuestion}
              sx={{
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                color: 'white'
              }}
            >
              Get Another Question
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}

export default SpeakingPart2;