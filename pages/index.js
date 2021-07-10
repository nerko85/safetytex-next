import Button from "../containers/Button";
import Tag from "../containers/Tag";
import Hero from "../components/Hero";
import Facts from "../components/Facts";
import Counter from "../components/Counter";
import About from "../components/About";
import Services from "../components/Services";
import Brands from "../components/Brands";
import WeOffer from "../components/WeOffer";
import Map from "../components/Map";
import ContactDetails from "../components/ContactDetails";

import { createClient } from "contentful";

// import { brands, company, categories } from "../data";

export default function Home({ brands, company, categories }) {
  return (
    <>
      <Hero
        title="Let's growth you business with us"
        subtitle="Skanska is a Swedish based company that has many subsidiaries around Sweden and the world, making them one of the biggest construction companies in the world."
      >
        <Button url="/proizvodi">Getting started</Button>
      </Hero>
      <Facts
        title="Let's growth your business with us"
        description="The four major types of construction include residential building, institutional and commercial building, specialized industrial construction."
      >
        <Counter />
      </Facts>
      <About>
        <Tag>O nama</Tag>
        <h1>Let's growth your business with us</h1>
        <p>
          The four major types of construction include residential building,
          institutional and commercial building, specialized industrial
          construction.
        </p>
        <Button url="/o-nama">Learn More</Button>
      </About>
      <Services title="Preduzmi mere" services={categories} />
      <About type="partners">
        <Tag>Partneri</Tag>
        <h1>Let's growth your business with us</h1>
        <p>
          The four major types of construction include residential building,
          institutional and commercial building, specialized industrial
          construction.
        </p>
        <p>
          The four major types of construction include residential building,
          institutional and commercial building, specialized industrial
          construction.
        </p>
        {/* <Button url="/o-nama">Learn More</Button> */}
      </About>
      <Brands brands={brands} />
      <WeOffer
        image={"/images/storepic.png"}
        bg={"/images/we-offer-bg.svg"}
      ></WeOffer>
      <Map />
      <ContactDetails company={company} />
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFULL_SPACE_ID,
    accessToken: process.env.CONTENTFULL_ACCESS_KEY,
  });

  const brands = await client.getEntries({
    content_type: "brands",
  });
  const categories = await client.getEntries({
    content_type: "categories",
  });
  const company = await client.getEntries({
    content_type: "company",
  });

  // const [brands, categories, company] = await Promise.all([
  //   fetchAPI(
  //     `https://cdn.contentful.com/spaces/${process.env.CONTENTFULL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFULL_ACCESS_KEY}&content_type=brands`
  //   ),
  //   fetchAPI(
  //     `https://cdn.contentful.com/spaces/${process.env.CONTENTFULL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFULL_ACCESS_KEY}&content_type=categories&include=2`
  //   ),
  //   fetchAPI(
  //     `https://cdn.contentful.com/spaces/${process.env.CONTENTFULL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFULL_ACCESS_KEY}&content_type=company&include=3`
  //   ),
  // ]);

  return {
    props: {
      brands: brands.items,
      categories: categories.items,
      company: company.items,
    },
    revalidate: 2,
  };
}
