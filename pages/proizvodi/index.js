import Head from "next/head";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import CategoryGrid from "../../components/CategoryGrid";
import Tag from "../../containers/Tag";
import Spacer from "../../containers/Spacer";
import Button from "../../containers/Button";
import ProductSlider from "../../components/ProductSlider/ProductSlider";

import { categories } from "../../data";
import styled from "styled-components";

import { useProducts } from "../../context/ProductsContext";
import { NextSeo } from "next-seo";

export default function Proizvodi() {
  const { products } = useProducts();
  const SEO = {
    title: "Safetytex - Proizvodi",
    description: "Ponuda proizvoda koje nudi kompanija Safetytex",
    openGraph: {
      title: "Safetytex - Proizvodi",
      description: "Ponuda proizvoda koje nudi kompanija Safetytex",
      image: "/images/MaskGroup4.png",
      url: "https://www.safetytex.rs/proizvodi",
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <StyledProducts>
        <div className="content">
          <CategoryGrid categories={categories}>
            <Tag>Shop by</Tag>
            <h2>Categories</h2>
            <Spacer />
          </CategoryGrid>
          <ProductSlider products={products} aplay={true} nav={false}>
            <Tag>For You</Tag>
            <h2>Top Featured Products</h2>
            <Spacer />
          </ProductSlider>

          <Banner image="/images/266.png">
            <p>
              Pritisni dugme <strong>"DOWNLOAD"</strong> da bi ste preuzeli
              najnoviji katalog
            </p>
            <Button url="#">Download</Button>
          </Banner>
          <Banner image="/images/banner67.png" />

          <ProductSlider products={products} aplay={true} nav={true}>
            <Tag>For You</Tag>
            <h2>New Products</h2>
            <Spacer />
          </ProductSlider>
        </div>
      </StyledProducts>
    </>
  );
}

const StyledProducts = styled.div`
  padding: 5rem 0;
  background: whitesmoke;
  .content {
    max-width: 1000px;
    margin: 0 auto;
  }
`;
