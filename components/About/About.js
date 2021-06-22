import React from "react";
import { About as StyledAbout } from "./About.style";
import Tag from "../../containers/Tag";
import Button from "../../containers/Button";

export default function About({ title, about, type, children }) {
  return (
    <StyledAbout type={type}>
      <div className="container">
        <div className="content">
          <div className="media">{children}</div>
          <div className="text-content">
            <Tag>{type === "partners" ? "Partneri" : "O nama"}</Tag>
            <h1>{title}</h1>
            <p>{about}</p>
            {type == "about" ? <Button url="/o-nama">Learn More</Button> : ""}
          </div>
        </div>
      </div>
    </StyledAbout>
  );
}

About.defaultProps = {
  type: "about",
};
