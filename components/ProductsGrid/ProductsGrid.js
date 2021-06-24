import React from "react";
import { ProductsGrid as Grid } from "./ProductsGrid.style";
import ProductCard from "../ProductCard";

export default function ProductsGrid({ columns, rows, products, take }) {
  return (
    <Grid columns={columns} rows={rows}>
      {!products ? (
        <div>Loading</div>
      ) : (
        products.map((product) => {
          const { images, name, status, price } = product.fields;
          return (
            <ProductCard
              key={product.sys.id}
              image={images[0].fields.file.url}
              name={name}
              status={status}
              price={price}
            />
          );
        })
      )}
    </Grid>
  );
}
