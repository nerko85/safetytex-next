import Head from "next/head";
import ProductLayout from "../../components/Layout/ProductsLayout";
import ProductsGrid from "../../components/ProductsGrid";
import Sidebar from "../../components/Sidebar";
import Banner from "../../components/Banner/Banner";
import Button from "../../containers/Button";

import { products, categories } from "../../data";
import { useProducts } from "../../context/ProductsContext";
import { NextSeo } from "next-seo";

export default function Proizvodi() {
  const { sortedProducts, loading } = useProducts();
  const SEO = {
    title: "Safetytex - Tekstil",
    description: "Ponuda tekstila koju nudi kompanija Safetytex",
    openGraph: {
      title: "Safetytex - Tekstil",
      description: "Ponuda tekstila koju nudi kompanija Safetytex",
      image: "/images/kontaktbanner.png",
      url: "https://www.safetytex.rs/tekstil",
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <ProductLayout>
        <Sidebar categories={categories}>
          <Banner format="portrait" image="/images/26.png">
            <p>
              Pritisni dugme <strong>"DOWNLOAD"</strong> da bi ste preuzeli
              najnoviji katalog
            </p>
            <Button url="#">Download</Button>
          </Banner>
        </Sidebar>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ProductsGrid columns={3} rows={4} products={sortedProducts} />
        )}
      </ProductLayout>
    </>
  );
}
