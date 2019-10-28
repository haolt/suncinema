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
  a:hover span, a:focus span, a:active span, a.selected span {
    color: #ff7675;
  }
  .MuiCardHeader-title.MuiTypography-h5 {
    color: #ff7675;
    font-size: 1.4em;
  }
`;

export default GlobalStyle;
