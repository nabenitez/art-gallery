import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const secondaryMain = '#ff452b';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: secondaryMain,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: secondaryMain,
          },
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
