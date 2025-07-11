// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'grey',
          '&.Mui-focused': {
            color: 'grey', // label on focus
          },
          '&:hover': {
            color: 'grey', // label on hover
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          color: 'grey', // input text
        },
        notchedOutline: {
          borderColor: 'grey', // default border
        },
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'grey', // hover border
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'grey', // focused border
          },
        },
      },
    },
  },
});

export default theme;
