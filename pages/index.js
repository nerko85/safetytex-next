import Head from "next/head";
import Button from "../containers/Button";
import Hero from "../components/Hero";
import Facts from "../components/Facts";
import Counter from "../components/Counter";
import About from "../components/About";
import Services from "../components/Services";
import Brands from "../components/Brands";
import Image from "next/image";

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
      <About
        title="Let's growth your business with us"
        about="The four major types of construction include residential building, institutional and commercial building, specialized industrial construction."
      >
        <Image
          src="/images/busines_meeting.png"
          alt="Let's growth your business with us"
          height="562px"
          width="375px"
          layout="intrinsic"
        />
      </About>
      <Services title="Preduzmi mere" services={categories} />
      <About
        type="partners"
        title="Let's growth your business with us"
        about="The four major types of construction include residential building, institutional and commercial building, specialized industrial construction.

The four major types of construction include residential building, institutional and commercial building, specialized industrial construction."
      >
        <Image
          src="/images/busines_meeting.png"
          alt="Let's growth your business with us"
          height="562px"
          width="375px"
          layout="intrinsic"
        />
      </About>
      <Brands brands={brands} />
      <Map />
      <ContactDetails company={company} />
    </>
  );
}
