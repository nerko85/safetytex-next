import React from "react";
import Image from "next/image";
import { Search as StyledSerch } from "./Search.style";

export default function Search({}) {
  return (
    <StyledSerch>
      <div className="icon">
        <Image
          src="/images/magnifier.svg"
          alt="Magnifier search icon"
          width="18px"
          height="18px"
        />
      </div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Trazi po zelji..."
      />
    </StyledSerch>
  );
}
