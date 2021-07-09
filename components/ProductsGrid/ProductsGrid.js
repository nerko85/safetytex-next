import React, { useEffect, useState } from "react";
import { ProductsGrid as Grid, FilterTop } from "./ProductsGrid.style";
import ProductCard from "../ProductCard";
import Select from "../../containers/Select";
import Pagination from "../../containers/Pagination";

export default function ProductsGrid({ columns, rows, products, take }) {
  const [page, setPage] = useState(1);

  // const [sorted, setSorted] = useState([...products]);

  // useEffect(() => {
  //   setSorted();
  // }, [sorted]);

  const handleChange = (e) => {
    const value = e.target.value;
    // setSorted(sortProducts(value));
  };

  const DEFAULT_PAGE_LIMIT = 12;

  const indexOfLastPost = page * DEFAULT_PAGE_LIMIT;
  const indexOfFirstPost = indexOfLastPost - DEFAULT_PAGE_LIMIT;

  const data = products?.slice(indexOfFirstPost, indexOfLastPost);

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
        {!data ? (
          <div>Loading</div>
        ) : (
          data.map((product) => {
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
        <Pagination
          page={page}
          setPage={setPage}
          DEFAULT_PAGE_LIMIT={DEFAULT_PAGE_LIMIT}
          data={data}
          products={products}
        />
      </Grid>
    </div>
  );
}
