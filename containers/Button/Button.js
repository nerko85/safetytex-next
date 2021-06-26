import React from "react";
import { Button as StyledButton } from "./Button.style";
import Link from "next/link";

export default function Button({ type, url, children }) {
  return (
    <StyledButton type={type}>
      <Link href={url}>
        <a>{children}</a>
      </Link>
    </StyledButton>
  );
}

Button.defaultProps = {
  type: "primary",
  url: "#",
};
