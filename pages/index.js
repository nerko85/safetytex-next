import Button from "../containers/Button";
import Tag from "../containers/Tag";
import Hero from "../components/Hero";
import Facts from "../components/Facts";
import Counter from "../components/Counter";
import About from "../components/About";
import Services from "../components/Services";
import Brands from "../components/Brands";
import WeOffer from "../components/WeOffer";

import { brands, company, categories } from "../data";
import Map from "../components/Map";
import ContactDetails from "../components/ContactDetails";

export default function Home() {
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
            The four major types of construction include residential 
            building, institutional and commercial building, specialized 
            industrial construction.
          </p>
          <Button url="/o-nama">Learn More</Button>
      </About>
      <Services title="Preduzmi mere" services={categories} />
      <About type="partners">
        <Tag>Partneri</Tag>
          <h1>Let's growth your business with us</h1>
          <p>
            The four major types of construction include residential 
            building, institutional and commercial building, specialized 
            industrial construction.
          </p>
          <p>
            The four major types of construction include residential 
            building, institutional and commercial building, specialized 
            industrial construction.
          </p>
          {/* <Button url="/o-nama">Learn More</Button> */}
      </About>
      <Brands brands={brands} />
      <WeOffer image={"/images/storepic.png"} bg={"/images/we-offer-bg.svg"}></WeOffer>
      <Map />
      <ContactDetails company={company} />
    </>
  );
}
