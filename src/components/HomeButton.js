import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

function HomeButton() {
  return (
    <Box sx={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1 }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<HomeIcon />}
        >
          Home
        </Button>
      </Link>
    </Box>
  );
}

export default HomeButton; 