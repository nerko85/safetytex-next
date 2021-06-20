import React from "react";
import { Hero as StyledHero } from "./Hero.style";

export default function Hero({ title, subtitle, hero, children, small }) {
  return (
    <StyledHero hero={hero} small={small}>
      <div className="content">
        <div className="container">
          <div className="text">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </StyledHero>
  );
}

Hero.defaultProps = {
  hero: "/images/MaskGroup4.png",
  title: "Welcome to Safety-tex",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, ratione?",
};
