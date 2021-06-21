import React from "react";
import Tag from "../../containers/Tag";
import { Facts as StyledFacts } from "./Facts.styled";

export default function Facts({ title, description, children }) {
  return (
    <StyledFacts>
      <div className="container">
        <Tag>Činjenice</Tag>
        <div className="content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {children}
      </div>
    </StyledFacts>
  );
}
