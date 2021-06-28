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

const colors = {
  primary: "#057E53",
  darkGray: "#212529",
  lightGray: "#979a9c",
  white: "#fff",
};

const primaryTheme = {
  background: colors.lightGray,
  primary: colors.primary,
  navLinks: colors.darkGray,
  text: colors.darkGray,
  font: "Open Sans",
  position: "relative",
  ...responsive,
  ...colors,
  transition: "all .4s ease",
};

const secundarytheme = {
  background: colors.white,
  primary: colors.primary,
  navLinks: colors.white,
  text: colors.darkGray,
  font: "Open Sans",
  position: "absolute",
  ...responsive,
  ...colors,
  transition: "all .4s ease",
};

const GlobalStyles = createGlobalStyle`
  ${"" /* body {
    background:${({ theme }) => theme.background}
  } */}
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

    @media(max-width:${({ theme }) => theme.tablet}){
      font-size:2.2rem;
    }
  }

  h2 {
    margin-top:0;
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
