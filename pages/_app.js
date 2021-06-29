import "../styles/globals.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { ThemeProvider } from "styled-components";
import {
  primaryTheme,
  secundarytheme,
  GlobalStyles,
} from "../styles/ThemeConfig";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

import { ProductsProvider } from "../context/ProductsContext";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={pathname == "/" ? secundarytheme : primaryTheme}>
        <ProductsProvider>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ProductsProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
