import { createGlobalStyle } from "styled-components";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    
  }

  body {
    
    
    font-family: ${roboto.style.fontFamily};
    position: relative;
    margin: 0;
    background-color: black;
    color: whitesmoke;
    

  }
`;
