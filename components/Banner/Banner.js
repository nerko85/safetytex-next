import React from "react";
import { Banner as StyledBanner } from "./Banner.styled";

export default function Banner({ children, image }) {
  return (
    <div className="container">
      <StyledBanner image={image}>{children}</StyledBanner>
    </div>
  );
}
