import React from "react";
import { Banner as StyledBanner } from "./Banner.styled";

export default function Banner({ children, image, format }) {
  return (
    <StyledBanner format={format} image={image}>
      {children}
    </StyledBanner>
  );
}

Banner.defaultProps = {
  format: "landscape",
};
