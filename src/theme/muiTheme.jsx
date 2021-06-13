import { createMuiTheme } from '@material-ui/core/styles';
import '@fontsource/roboto-mono';

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
    fontFamily: '"Roboto Mono", "Roboto", "Helvetica", "Arial", "sans-serif"',
    h6: {
      fontWeight: 'bold',
    },
  },
  shape: {
    borderRadius: 10,
  },
  shadows: Array(25).fill('0px 10px 20px rgba(0, 0, 0, 0.2)',1,2),
  overrides: {
    MuiCardActionArea: {
      maxWidthLg: 304,
    },
    MuiCardHeader: {
      root: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    MuiCardContent: {
      root: {
        padding: 24,
        "&:last-child": {
          paddingBottom: 0,
       },
      },
    },
  },
});

export { lightTheme };
