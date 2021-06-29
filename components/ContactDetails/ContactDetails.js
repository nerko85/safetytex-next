import React from "react";
import { Details } from "./ContactDetails.style";
import { FaPhoneSquareAlt, FaCommentDots } from "react-icons/fa";

export default function ContactDetails({ company }) {
  const { address, phone, email } = company.fields;
  return (
    <div className="container">
      <Details>
        <div className="card address">
          <div className="info">
            <h4>Address:</h4>
            <p>{address}</p>
          </div>
        </div>
        <div className="card">
          {/* <Image src="/images/telephone.svg" height="37px" width="37px" /> */}
          <FaPhoneSquareAlt color="green" />
          <div className="info">
            <h4>Brojevi telefona</h4>
            {<p>{phone}</p>}
          </div>
        </div>
        <div className="card">
          {/* <Image src="/images/chat.svg" height="37px" width="37px" /> */}
          <FaCommentDots color="#000" />
          <div className="info">
            <h4>Email:</h4>
            <p>{email}</p>
          </div>
        </div>
      </Details>
    </div>
  );
}
