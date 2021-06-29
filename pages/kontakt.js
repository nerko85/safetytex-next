import Hero from "../components/Hero";
import Map from "../components/Map";
import Spacer from "../containers/Spacer";

import { company } from "../data";
import ContactDetails from "../components/ContactDetails/ContactDetails";
import { NextSeo } from "next-seo";

export default function Home() {
  const SEO = {
    title: "Safetytex - Kontakt",
    description: "Kontak podaci kompanije Safetytex",
    openGraph: {
      title: "Safetytex - Kontakt",
      description: "Kontak podaci kompanije Safetytex",
      image: "/images/kontaktbanner.png",
      url: "https://www.safetytex.rs/kontakt",
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Hero
        title="Contacts"
        subtitle="Home/Contacts"
        hero="/images/kontaktbanner.png"
        small
      ></Hero>
      <Spacer />
      <ContactDetails company={company} />
      <Map></Map>
      <Spacer />
    </>
  );
}
