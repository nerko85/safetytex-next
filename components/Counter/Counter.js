import React from "react";
import { Counter as StyledCounter, Stat } from "./Counter.style";

export default function Counter({ projects, clients, partners, countries }) {
  return (
    <StyledCounter>
      <div className="statistics">
        <Stat>
          <span>90</span>
          <p>Complited Projects</p>
        </Stat>
        <Stat>
          <span>46+</span>
          <p>Happy Clients</p>
        </Stat>
        <Stat>
          <span>12</span>
          <p>Company Partners</p>
        </Stat>
        <Stat>
          <span>9</span>
          <p>Countries reached</p>
        </Stat>
      </div>
    </StyledCounter>
  );
}
