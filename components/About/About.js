import React from "react";
import { About as StyledAbout } from "./About.style";
import Image from "next/image";

export default function About({ type, children }) {
  return (
    <StyledAbout type={type}>
      <div className="container">
        <div className="content">
          <div className="media">
            <Image
              src="/images/busines_meeting.png"
              alt="Let's growth your business with us"
              height="562px"
              width="375px"
              layout="intrinsic"
            />
          </div>
          <div className="text-content">{children}</div>
        </div>
      </div>
    </StyledAbout>
  );
}

About.defaultProps = {
  type: "about",
};
