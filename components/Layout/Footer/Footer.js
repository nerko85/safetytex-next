import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Footer as StyledFooter,
  CopyRight,
  InfoCard,
  NewsLetter,
} from "./Footer.styled";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Footer() {
  const [message, setMessage] = useState(null);
  let newsForm = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      if (!field.value.length) {
        toast.warn("Molimo unesite validnu email adresu", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000,
        });
        return;
      }
      formData[field.name] = field.value;
    });

    if (!formData.email) return;

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
      });

    toast.info(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      onClose: () => {
        setMessage(null);
        newsForm.reset();
      },
    });
  };
  return (
    <StyledFooter>
      <div className="container">
        <div className="inner">
          <InfoCard>
            <h6>Kontakt</h6>
            <ul>
              <li>
                <Link href="tel:+381616598696">
                  <a>+381 61 6598696</a>
                </Link>
              </li>
              <li>
                <Link href="mailto:office@safetytex.rs">
                  <a>office@safetytex.rs</a>
                </Link>
              </li>
              <li>
                <p>Naša radnja na mapi</p>
              </li>
            </ul>
          </InfoCard>
          <InfoCard>
            <h6>Usluga klijenata</h6>
            <ul>
              <li>
                <Link href="/proizvodi">
                  <a>Proizvodi</a>
                </Link>
              </li>
              <li>
                <Link href="/proizvodi/radna-odjeca">
                  <a>Radna odjeća</a>
                </Link>
              </li>
              <li>
                <Link href="/proizvodi/radna-obuca">
                  <a>Radna obuća</a>
                </Link>
              </li>
              <li>
                <p>Tekstil</p>
              </li>
            </ul>
          </InfoCard>
          <InfoCard>
            <h6>Informacije</h6>
            <ul>
              <li>
                <Link href="/o-nama">
                  <a>O Nama</a>
                </Link>
              </li>
              <li>
                <Link href="//kontakt">
                  <a>Kontakt</a>
                </Link>
              </li>
            </ul>
          </InfoCard>
          <InfoCard>
            <h6>Brzi linkovi</h6>
            <ul>
              <li>
                <Link href="/">
                  <a>Početna</a>
                </Link>
              </li>
              <li>
                <Link href="/proizvodi/">
                  <a>Proizvodi</a>
                </Link>
              </li>
              <li>
                <Link href="/o-nama">
                  <a>O Nama</a>
                </Link>
              </li>
              <li>
                <Link href="/kontakt">
                  <a>Kontakt</a>
                </Link>
              </li>
            </ul>
          </InfoCard>
          <NewsLetter span2>
            <h5>Pretplatite se na SafetyTex putem Email-a</h5>
            <p>
              Pretplatite se na naš newsletter kako <br />
              bi dobili ažurirane novosti o nama.
            </p>
            <form
              action="/api/newsletter"
              onSubmit={handleSubmit}
              ref={(el) => (newsForm = el)}
            >
              <div className="input-wrapp">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <button>Preplatite se</button>
                </div>
              </div>
            </form>
          </NewsLetter>
          <InfoCard>
            <h6>PRATITE NAS NA DRUŠTVENIM MREŽAMA</h6>
            <ul className="social">
              <li>
                <Link href="#">
                  <a target="blank">
                    <FaInstagram />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a target="blank">
                    <FaTwitter />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/SafetyTex-100467918184328/?ref=py_c">
                  <a target="blank">
                    <FaFacebookF />
                  </a>
                </Link>
              </li>
            </ul>
          </InfoCard>
        </div>
        <CopyRight>
          <p>© Copyright 2021 SafetyTex. Sva prava pridržana!</p>
          <Image
            src="/images/Group484.svg"
            alt="Safetytex logo"
            height="18px"
            width="22px"
          />
        </CopyRight>
      </div>
    </StyledFooter>
  );
}
