import { createMuiTheme } from '@material-ui/core/styles';

require('typeface-noto-sans');

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#8e64c8',
      main: '#000000',
      dark: '#2d0d68',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: '"Noto Sans", "Roboto", "Helvetica", "Arial", "sans-serif"',
  },
});

export { lightTheme };