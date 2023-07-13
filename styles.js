import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    
    font-family: system-ui;
    background-color: #000000;
    color: #E8D7BC;
    position: relative;
  
    margin: 0px;
    

  }
`;
