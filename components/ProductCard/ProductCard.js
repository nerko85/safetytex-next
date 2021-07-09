import React from "react";
import Image from "next/image";
import { Card } from "./ProductCard.style";

export default function ProductCard({ image, status, name, price }) {
  console.log(image);
  return (
    <Card>
      <span className="badge">novo</span>
      <Image src={`https:${image}`} height="114px" width="200px" />
      <p className="status">{status}</p>
      <h3>{name}</h3>
      <h4>{price} RSD</h4>
    </Card>
  );
}
