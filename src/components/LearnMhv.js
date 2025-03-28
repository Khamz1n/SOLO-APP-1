// src/components/LearnMhv.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import HomeButton from './HomeButton';

function LearnMhv() {
  return (
    <Container maxWidth="md">
      <HomeButton />
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Must-Have Vocabulary
        </Typography>
        <Typography variant="body1" sx={{ mt: 4 }}>
          This section will contain essential vocabulary for IELTS.
        </Typography>
      </Box>
    </Container>
  );
}

export default LearnMhv;