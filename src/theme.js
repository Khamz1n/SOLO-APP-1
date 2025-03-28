import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // A nice blue shade
      light: '#64b5f6',
      dark: '#1976d2',
    },
    secondary: {
      main: '#ff4081', // A vibrant pink
      light: '#ff79b0',
      dark: '#c60055',
    },
    background: {
      default: '#f5f7fa', // Light grayish-blue background
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e50', // Dark blue-gray for text
      secondary: '#546e7a',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
      letterSpacing: '0.5px',
      marginBottom: '1rem',
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '0.5px',
      marginBottom: '1rem',
    },
    h5: {
      fontWeight: 500,
      letterSpacing: '0.5px',
      marginBottom: '0.5rem',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: '80px', // Increased top padding to account for home button
          paddingBottom: '2rem',
          position: 'relative', // For proper positioning of absolute elements
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          padding: '10px 24px',
          fontSize: '1rem',
          boxShadow: '0 4px 6px rgba(33, 150, 243, 0.15)',
          '&:hover': {
            boxShadow: '0 6px 10px rgba(33, 150, 243, 0.25)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});

export default theme; 