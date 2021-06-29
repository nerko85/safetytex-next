import React from "react";
import { Map as StyledMap } from "./Map.styled";

export default function Map({ children }) {
  return (
      <StyledMap>
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/view?zoom=17&center=44.6188%2C20.4098&key=AIzaSyDg7PSQAhdh41PxLLRm6cp1hjdiyqZqFE4"
        ></iframe>
        <span>{children}</span>
      </StyledMap>
  );
}
