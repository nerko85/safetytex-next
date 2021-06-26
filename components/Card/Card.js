import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card as StyledCard } from "./Card.style";
import Button from "../../containers/Button";

export default function Card({ name, description, icon, slug }) {
  return (
    <StyledCard>
      <Link href={`/proizvodi/${slug}`}>
        <a>
          <Image src={icon} height="118px" width="118px" />
        </a>
      </Link>
      <h3>{name}</h3>
      <p>{description}</p>
      <Button url={`/proizvodi/${slug}`}>
        <img src="/images/Group371.png" alt={name} />
      </Button>
    </StyledCard>
  );
}
