import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
      font-family: 'Lexend Deca', sans-serif;
  }
  *{
      overflow-x: hidden;
      font-family: 'Lexend Deca', sans-serif;
      box-sizing: border-box;
      user-select: none;
  }
`;

export default GlobalStyle;