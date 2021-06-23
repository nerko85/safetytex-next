const services = [
  {
    id: 1,
    icon: "/images/odjeca.svg",
    title: "Radna odeća",
    description:
      "The four major types of construction include residential building, specialized industrial construction",
    url: "/proizvodi/odjeca",
  },
  {
    id: 2,
    icon: "/images/obuca.svg",
    title: "Radna obuća",
    description:
      "The four major types of construction include residential building, specialized industrial construction",
    url: "/proizvodi/obuca",
  },
  {
    id: 3,
    icon: "/images/textil.svg",
    title: "Tekstil",
    description:
      "The four major types of construction include residential building, specialized industrial construction",
    url: "/proizvodi/tekstil",
  },
];

const brands = [
  {
    name: "",
    image: "/images/slide1.svg",
  },
  {
    name: "",
    image: "/images/slide2.svg",
  },
  {
    name: "",
    image: "/images/slide3.svg",
  },
  {
    name: "",
    image: "/images/slide4.svg",
  },
  {
    name: "",
    image: "/images/slide5.svg",
  },
];

const company = {
  name: "SafetyTex",
  address: "Iberska bb 36320 Tutin, Srbija",
  phone: "+381 61 6598696",
  email: "safetytexbg@gmail.com",
};

const products = [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "hibernus",
      slug: "hibernus",
      price: 6900,
      status: "available",
      topSelling: false,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      images: [
        {
          fields: {
            file: {
              url: "/images/obuca1.png",
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "Neon tregerice",
      slug: "neon-tregerice",
      price: 4800,
      status: "available",
      topSelling: false,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      images: [
        {
          fields: {
            file: {
              url: "/images/comb1.png",
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "Urban Plus bluza",
      slug: "urban-plus-bluza",
      price: 6500,
      status: "available",
      topSelling: false,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      images: [
        {
          fields: {
            file: {
              url: "/images/jakna1.png",
            },
          },
        },
      ],
    },
  },
];

export { services, brands, company, products };
