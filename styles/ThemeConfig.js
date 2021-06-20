import { createGlobalStyle } from "styled-components";

const primaryTheme = {
  primary: "#057E53",
  text: "#212529",
  secoundary: "blue",
  font: "Open sans",
};

const secundarytheme = {};

const GlobalStyles = createGlobalStyle`
  html, body {
    margin:0;
    padding:0;
  }
  .container {
    max-width:1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .page {
    min-height:100vh;
    display:flex;
    flex-direction:column;
  }

  .wrapp {
    flex-grow:1;
  }
  h1 {
    color: "#fff";
    font-weight: bold;
    font-size: 3rem;
    font-family: ${({ theme }) => theme.font};
  }
  p {
    color: ${({ theme }) => theme.text};
    font: 18px ${({ theme }) => theme.font};
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
  }
  a {
  color: inherit;
  text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export { primaryTheme, secundarytheme, GlobalStyles };
