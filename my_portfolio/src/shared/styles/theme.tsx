import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#37474f',
      light: '#62727b',
      dark: '#102027',
    },
    secondary: {
      main: '#424242',
      light:'#6d6d6d',
      dark: '#1b1b1b'
    },
    text: {
      primary: '#ffffff',
      secondary: '#757575',
    },
  },
  typography: {
    button: {
      // buttonが大文字に変換されるのを防ぐ
      textTransform: 'none',
    },
  },
});

export default theme;
