import Hero from "../components/Hero";

import { company, staff, clients } from "../data";
import OurOffer from "../components/OurOffer/OurOffer";
import ClientsSlider from "../components/ClientsSlider/ClientsSlider";
import ContactUs from "../components/ContactUs";
import { NextSeo } from "next-seo";

export default function Home() {
  const SEO = {
    title: "Safetytex - O nama",
    description: "Ovdje mozete pronaci sve detalje o kompaniji Safetytex",
    openGraph: {
      title: "Safetytex - O nama",
      description: "Ovdje mozete pronaci sve detalje o kompaniji Safetytex",
      image: "/images/banner1.png",
      url: "https://www.safetytex.rs/o-nama",
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Hero
        title="O nama"
        subtitle="Home/O nama"
        hero="/images/banner1.png"
        small
      ></Hero>
      <OurOffer staff={staff[0]} />
      <ClientsSlider clients={clients} nav={true}>
        <h1>Our clients</h1>
        <p>
          Blueberries are perennial flowering plants with blue or purple
          berries. To maintain top quality, berries are harvested at least every
          other day.
        </p>
      </ClientsSlider>
      <ContactUs />
    </>
  );
}
