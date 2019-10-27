import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    /* font-family: 'Montserrat', sans-serif; */
  }
  img {
    width: 100%;
  }
  a, a:hover, a:focus, a:active {
    text-decoration: none;
  }
  .MuiExpansionPanel-root:before {
    display: none;
  }
`;

export default GlobalStyle;
