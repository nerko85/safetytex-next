import React from "react";
import { Tag as StyledTag } from "./Tag.style";

export default function Tag({ type, children }) {
  return <StyledTag type={type}>{children}</StyledTag>;
}

Tag.defaultProps = {
  type: "primary",
};
