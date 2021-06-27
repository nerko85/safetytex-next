import React from "react";
import { ProductsGrid as Grid, FilterTop } from "./ProductsGrid.style";
import ProductCard from "../ProductCard";
import Select from "../../containers/Select";

export default function ProductsGrid({ columns, rows, products, take }) {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="content">
      <FilterTop>
        <div className="heading">
          <span>For You</span>
          <h3>Top Featured products</h3>
        </div>
        <div className="filter">
          <form action="" method="post" onChange={handleChange}>
            <Select name="filter" id="filter">
              <option value="popularity" defaultValue>
                Popularity
              </option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
              <option value="max">Cijena najvisa</option>
              <option value="min">Cijena najniza</option>
            </Select>
          </form>
        </div>
      </FilterTop>
      <Grid columns={columns} rows={rows}>
        {!products ? (
          <div>Loading</div>
        ) : (
          products.map((product) => {
            const { id, images, name, status, price } = product;
            return (
              <ProductCard
                key={id}
                image={images[0]}
                name={name}
                status={status}
                price={price}
              />
            );
          })
        )}
      </Grid>
    </div>
  );
}
