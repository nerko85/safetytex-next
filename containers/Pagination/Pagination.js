import React from "react";
import { Pagination as StyledPagination, Button } from "./Pagination.style";

export default function Pagination({
  setPage,
  page,
  DEFAULT_PAGE_LIMIT,
  data,
  products,
}) {
  console.log(data);
  return (
    <StyledPagination>
      <Button
        type="previous"
        disabled={page === 1}
        onClick={() => setPage((old) => old - 1)}
      >
        Predhodna strana
      </Button>
      <Button
        type="next"
        disabled={
          page * DEFAULT_PAGE_LIMIT >= products.length ||
          page === products.length / DEFAULT_PAGE_LIMIT
        }
        onClick={() => setPage((old) => old + 1)}
      >
        Sljedeca strana
      </Button>
    </StyledPagination>
  );
}
