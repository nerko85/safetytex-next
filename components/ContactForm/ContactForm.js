import React from "react";
import { Contact } from "./ContactForm.style";

import Tag from "../../containers/Tag";

export default function ContactForm() {
  return (
    <div className="container">
      <Contact>
        <div className="our-details">
          <Tag>O nama</Tag>
          <h1>Let's growth your business with us</h1>

          <h3>Strong Market Analysis</h3>
          <p>
            Blueberries are small, round, purple or blue berries belonging to
            the heather family. Highbush and lowbush blueberries are the two
            most common varieties.
          </p>
          <h3>Strong Market Analysis</h3>
          <p>
            Blueberries are small, round, purple or blue berries belonging to
            the heather family. Highbush and lowbush blueberries are the two
            most common varieties.
          </p>
          <h3>Strong Market Analysis</h3>
          <p>
            Blueberries are small, round, purple or blue berries belonging to
            the heather family. Highbush and lowbush blueberries are the two
            most common varieties.
          </p>
        </div>
        <div className="contact-form">
          <form action="" method="post"></form>
        </div>
      </Contact>
    </div>
  );
}
