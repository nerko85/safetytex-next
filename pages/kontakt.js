import Hero from "../components/Hero";
import Map from "../components/Map";
import Spacer from "../containers/Spacer";

import ContactDetails from "../components/ContactDetails/ContactDetails";
import { NextSeo } from "next-seo";

export default function Kontakt({ company }) {
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
      <div className="container">
        <Map />
      </div>
      <Spacer />
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFULL_SPACE_ID,
    accessToken: process.env.CONTENTFULL_ACCESS_KEY,
  });

  const company = await client.getEntries({
    content_type: "company",
  });

  return {
    props: {
      company: company.items,
    },
    revalidate: 2,
  };
}
