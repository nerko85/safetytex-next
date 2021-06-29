import React from "react";
import { Counter as StyledCounter, Stat } from "./Counter.style";
import CounterItem from "../CounterItem";

export default function Counter({ projects, clients, partners, countries }) {
  return (
    <StyledCounter>
      <div className="statistics">
        <Stat>
          <CounterItem from={0} to={90} />
          <p>Complited Projects</p>
        </Stat>
        <Stat>
          <CounterItem from={0} to={46} aditional="+" />
          <p>Happy Clients</p>
        </Stat>
        <Stat>
          <CounterItem from={0} to={12} />
          <p>Company Partners</p>
        </Stat>
        <Stat>
          <CounterItem from={0} to={9} />
          <p>Countries reached</p>
        </Stat>
      </div>
    </StyledCounter>
  );
}
