import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
  }

  :root {
    font-size: 62.5%;
  }

  ::-webkit-scrollbar{
    width: .7rem; 
    height: .7rem;
  }

  ::-webkit-scrollbar-track, ::-webkit-scrollbar-corner{
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb{
   background-color: ${({theme}) => theme.COLORS.WHITE};
   border-radius: 5rem;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter .2s;
  }
  
  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;