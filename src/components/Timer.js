import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

const Timer = ({ onPreparationEnd, resetKey }) => {
  const [seconds, setSeconds] = useState(60); // 1 minute for preparation
  const [isPreparation, setIsPreparation] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isWarning, setIsWarning] = useState(false);

  // Reset timer when resetKey changes
  useEffect(() => {
    setSeconds(60);
    setIsPreparation(true);
    setIsSpeaking(false);
    setIsWarning(false);
  }, [resetKey]);

  useEffect(() => {
    let interval = null;

    if (seconds > 0 && (isPreparation || isSpeaking)) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (seconds === 0 && isPreparation) {
      // When preparation time ends, start speaking time
      setIsPreparation(false);
      setIsSpeaking(true);
      setSeconds(120); // 2 minutes for speaking
      if (onPreparationEnd) {
        onPreparationEnd();
      }
    }

    // Check if we're in speaking mode and have 20 seconds left
    if (isSpeaking && seconds === 20) {
      setIsWarning(true);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [seconds, isPreparation, isSpeaking, onPreparationEnd]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleStartNow = () => {
    setIsPreparation(false);
    setIsSpeaking(true);
    setSeconds(120); // 2 minutes for speaking
    if (onPreparationEnd) {
      onPreparationEnd();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: isWarning 
          ? '#ff0000' 
          : isPreparation 
            ? '#FFD700' 
            : '#4CAF50',
        borderRadius: 2,
        p: 2,
        mb: 2,
        color: 'white',
        transition: 'background-color 0.5s ease',
        animation: isWarning ? 'blink 1s infinite' : 'none',
        '@keyframes blink': {
          '0%': { opacity: 1 },
          '50%': { opacity: 0.7 },
          '100%': { opacity: 1 }
        }
      }}
    >
      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
        {formatTime(seconds)}
      </Typography>
      <Typography variant="h6" component="div">
        {isPreparation ? 'Preparation Time' : 'Speaking Time'}
      </Typography>
      {isWarning && (
        <Typography 
          variant="h5" 
          component="div" 
          sx={{ 
            mt: 2, 
            textAlign: 'center',
            fontWeight: 'bold',
            animation: 'pulse 1s infinite',
            '@keyframes pulse': {
              '0%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.05)' },
              '100%': { transform: 'scale(1)' }
            }
          }}
        >
          Keep speaking! You're doing great! 🎯
        </Typography>
      )}
      {isPreparation && (
        <Button
          variant="contained"
          onClick={handleStartNow}
          sx={{
            mt: 2,
            bgcolor: '#4CAF50',
            '&:hover': {
              bgcolor: '#45a049',
            },
          }}
        >
          Start Now
        </Button>
      )}
    </Box>
  );
};

export default Timer; 