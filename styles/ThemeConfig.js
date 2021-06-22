import { createGlobalStyle } from "styled-components";

const responsive = {
  mobile: "480px",
  tablet: "768px",
  laptop: "960px",
  desktop: "1152px",
  widescreen: "1440px",
  large: "1660px",
  xlarge: "1920px",
};

const primaryTheme = {
  primary: "#057E53",
  text: "#212529",
  font: "Open Sans",
  position: "relative",
  navLinks: "#212529",
  ...responsive,
  transition:"all .4s ease"
};

const secundarytheme = {
  primary: "#057E53",
  text: "#212529",
  font: "Open Sans",
  position: "absolute",
  navLinks: "#fff",
  ...responsive,
  transition:"all .4s ease"
};

const GlobalStyles = createGlobalStyle`
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
    font-weight: bold;
    font-size: 3rem;
    line-height:1.2;
    margin:0;
  }
  p {
    color: ${({ theme }) => theme.text};
    font-size: 18px;
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
