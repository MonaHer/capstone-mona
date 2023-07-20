import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    
    font-family: system-ui;
    position: relative;
    margin: 0px;
    background-color: black;
    color: whitesmoke;
    

  }
`;
