import React, { useEffect, useState } from "react";
import { ProductsGrid as Grid, FilterTop } from "./ProductsGrid.style";
import ProductCard from "../ProductCard";
import Select from "../../containers/Select";

export default function ProductsGrid({ columns, rows, products, take }) {
  // const [sorted, setSorted] = useState([...products]);

  // useEffect(() => {
  //   setSorted();
  // }, [sorted]);

  const handleChange = (e) => {
    const value = e.target.value;
    // setSorted(sortProducts(value));
    console.log(value);
  };

  // const sortProducts = (value) => {
  //   return products.sort((a, b) => {
  //     if (value === "asc") {
  //       if (a.name > b.name) {
  //         return -1;
  //       } else {
  //         return 1;
  //       }
  //     } else {
  //       if (a.name > b.name) {
  //         return 1;
  //       } else {
  //         return -1;
  //       }
  //     }
  //   });
  // };

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
