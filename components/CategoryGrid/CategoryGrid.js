import React from "react";
import { Grid } from "./CategoryGrid.style";

import CategoryCard from "../CategoryCard";

export default function CategoryGrid({ children, categories }) {
  return (
    <>
      <div className="container">
        {children}
        <Grid>
          {categories &&
            categories.map((category) => {
              const { name, icon, slug } = category.fields;
              return (
                <CategoryCard
                  key={category.sys.id}
                  name={name}
                  icon={icon[0].fields.file.url}
                  slug={slug}
                />
              );
            })}
        </Grid>
      </div>
    </>
  );
}
