import React from "react";
import Image from "next/image";
import { OfferGrid } from "./OurOffer.style";

import Tag from "../../containers/Tag";

export default function OurOffer({ staff }) {
  const { firstName, lastName, position, images } = staff.fields;
  return (
    <div className="container">
      <OfferGrid>
        <Image src="/images/blackbacground.png" height="605px" width="390px" />
        <div className="content">
          <Tag>Sta mi nudimo</Tag>
          <h1>Let's growth your business</h1>
          <div className="staff-card">
            <div className="img-wrapp">
              <img src={images[0].fields.file.url} />
            </div>
            <div className="member-desc">
              <p>
                All raspberries will need pruning annually! Raspberries are
                perennials, however it’s important to realize that.
              </p>
              <span className="position">
                <strong>{`${firstName} ${lastName}`}</strong>
                {` ${position}`}
              </span>
            </div>
          </div>
          <p>
            The four major types of construction include residential building,
            institutional and commercial building, specialized industrial
            construction. A mix of both types of berries would be an ideal way
            to maximize the harvest period.
          </p>
        </div>
      </OfferGrid>
    </div>
  );
}
