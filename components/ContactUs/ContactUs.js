import React from "react";
import { Contact } from "./ContactUs.style";

import ContactForm from "../ContactForm";
import Tag from "../../containers/Tag";

export default function ContactUs() {
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
          <ContactForm />
        </div>
      </Contact>
    </div>
  );
}
