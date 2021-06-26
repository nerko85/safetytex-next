import React from "react";
import { ClientCard as Card } from "./ClientCard.style";

export default function ClientCard({ person, image, position, impression }) {
  return (
    <Card>
      <div className="img-round">
        <img src={image} alt={person} />
      </div>
      <h3 className="name">{person}</h3>
      <span className="position">{position}</span>
      <p className="impression">{impression}</p>
    </Card>
  );
}
