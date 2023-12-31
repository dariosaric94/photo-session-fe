import { createTheme } from '@mui/material';
import { darken, lighten } from '@mui/system';

const primaryColor = '#708090';
const secondaryColor = '#98FB98';


const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      light: lighten(primaryColor, 0.9),
      dark: darken(primaryColor, 0.7),
      contrastText: darken(primaryColor, 0.8)
    },
    secondary: {
      main: secondaryColor,
      light: lighten(secondaryColor, 0.8),
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

export default theme;
