import { createGlobalStyle } from "styled-components";

const primaryTheme = {
  primary: "#057E53",
  text: "#212529",
  secoundary: "blue",
  font: "Open Sans",
};

const secundarytheme = {};

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

  html, body {
    margin:0;
    padding:0;
  }
  .container {
    max-width:1150px;
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
    font-weight: 700;
    font-size: 3rem;
    font-family: ${({ theme }) => theme.font};
  }
  p {
    color: ${({ theme }) => theme.text};
    font-size: 18px;
    font-family:${({ theme }) => theme.font};
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