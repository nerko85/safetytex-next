// import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { primaryTheme, GlobalStyles } from "../styles/ThemeConfig";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={primaryTheme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
