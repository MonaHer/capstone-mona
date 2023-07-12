import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    
    font-family: system-ui;
    background-color: #282830;
    position: relative;
    margin: 0px;
    

  }
`;
