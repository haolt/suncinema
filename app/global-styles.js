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
    height: 100%;
  }
  a, a:hover, a:focus, a:active {
    text-decoration: none;
  }
`;

export default GlobalStyle;
