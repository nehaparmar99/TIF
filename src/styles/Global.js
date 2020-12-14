import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyles;