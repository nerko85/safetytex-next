import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import {
  primaryTheme,
  secundarytheme,
  GlobalStyles,
} from "../styles/ThemeConfig";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <ThemeProvider theme={pathname == "/" ? secundarytheme : primaryTheme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
