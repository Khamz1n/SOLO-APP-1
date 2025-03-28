// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import HomeScreen from './components/HomeScreen';
import LearnMhv from './components/LearnMhv';
import SpeakingPart1 from './components/SpeakingPart1';
import SpeakingPart2 from './components/SpeakingPart2';
import WritingPart2 from './components/WritingPart2';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        backgroundColor: 'background.default',
        backgroundImage: 'linear-gradient(45deg, rgba(33, 150, 243, 0.05), rgba(255, 64, 129, 0.05))',
      }}>
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/learn-mvh" element={<LearnMhv />} />
            <Route path="/speaking-part1" element={<SpeakingPart1 />} />
            <Route path="/speaking-part2" element={<SpeakingPart2 />} />
            <Route path="/writing-part2" element={<WritingPart2 />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;