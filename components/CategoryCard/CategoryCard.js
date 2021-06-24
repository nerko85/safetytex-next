import React from "react";
import Image from "next/image";
import { CategoryCard as Card } from "./CategoryCard.style";

export default function CategoryCard({ icon, name }) {
  return (
    <Card>
      <Image src={icon} height="68px" width="65px" />
      <h3>{name}</h3>
    </Card>
  );
}
