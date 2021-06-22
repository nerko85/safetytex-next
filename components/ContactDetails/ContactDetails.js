import React from "react";
import Image from "next/image";
import { Details } from "./ContactDetails.style";

export default function ContactDetails({ company }) {
  return (
    <div className="container">
      <Details>
        <div className="card">
          <div className="info">
            <h4>Address:</h4>
            <p>{company.address}</p>
          </div>
        </div>
        <div className="card">
          <Image src="/images/telephone.svg" height="37px" width="37px" />
          <div className="info">
            <h4>Brojevi telefona</h4>
            {<p>{company.phone}</p>}
          </div>
        </div>
        <div className="card">
          <Image src="/images/chat.svg" height="37px" width="37px" />
          <div className="info">
            <h4>Email:</h4>
            <p>{company.email}</p>
          </div>
        </div>
      </Details>
    </div>
  );
}
