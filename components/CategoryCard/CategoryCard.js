import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CategoryCard as Card } from "./CategoryCard.style";

export default function CategoryCard({ icon, name, slug }) {
  return (
    <Card>
      <Link href={`/proizvodi/${slug}`}>
        <a>
          <Image src={icon} height="68px" width="65px" />
        </a>
      </Link>
      <h3>{name}</h3>
    </Card>
  );
}
