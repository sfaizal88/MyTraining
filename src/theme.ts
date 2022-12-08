import { createTheme }  from '@mui/material/styles';
const theme = createTheme({
    palette: {
        text: {
          primary: '#313131',
          secondary: '#2b3e50',
          disabled: '#a8a9b6',
        },
        primary: {
          main: '#027bb3', // '#16a085',
          light: '#dadce0', // Border color
          dark: '#6261B5', //
        },
        secondary: {
          main: '#e74c3c', //
          light: '#f2f2f2', // Text field bg
        },
        background: {
          default: '#e7ebee', // Default BG
          paper: '#FFFFFF', // White
        },
        error: {
          main: '#e74c3c',
        },
        success: {
          main: '#27ae60',
        },
    }
})
export default theme