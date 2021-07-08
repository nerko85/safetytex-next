import React from "react";
import { Grid } from "./ProductsLayout.style";

export default function ProductLayout({ children }) {
  return (
    <Grid>
      <div className="grid-inner">{children}</div>
    </Grid>
  );
}
