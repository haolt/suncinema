import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    picodark: { main: '#22293C' },
    pico: { main: '#29344A' },
    picolight: { main: '#344358' },
    error: { main: '#eb4d4b' },
    grey: { main: '#606D80' },
    greylight: { main: '#B3BACB' },
    cyan: { main: '#13F5EE' },
    primary: { main: '#B3BACB' },
    // primary: { main: '#fff' },
    secondary: { main: '#e74c3c' },
    bgColor: { main: '#2ecc71' },
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: '3px',
  },
});
export default theme;
