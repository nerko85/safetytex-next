import React from "react";
import { Services as StyledServices } from "./Services.style";
import Tag from "../../containers/Tag";
import Card from "../Card";

export default function Services({ title, services }) {
  return (
    <StyledServices>
      <div className="container">
        <Tag type="secoundary">Naši proizvodi</Tag>
        <h1>{title}</h1>
        <div className="cards">
          {services &&
            services.map((service) => {
              const { name, description, slug, icon } = service.fields;
              return (
                <Card
                  key={service.sys.id}
                  name={name}
                  description={description}
                  icon={icon[1].fields.file.url}
                  slug={slug}
                  type="services"
                />
              );
            })}
        </div>
      </div>
    </StyledServices>
  );
}
