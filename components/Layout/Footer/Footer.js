import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Footer as StyledFooter,
  CopyRight,
  InfoCard,
  NewsLetter,
} from "./Footer.styled";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <div className="inner">
          <InfoCard>
            <h6>Kontakt</h6>
            <ul>
              <li>
                <p>+381 61 6598696</p>
              </li>
              <li>
                <p>safetytexbg@gmail.com</p>
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
                <p>Proizvodi</p>
              </li>
              <li>
                <p>Radna odeca</p>
              </li>
              <li>
                <p>Radna obuca</p>
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
                <p>O Nama</p>
              </li>
              <li>
                <p>Kontakt</p>
              </li>
            </ul>
          </InfoCard>
          <InfoCard>
            <h6>Brzi linkovi</h6>
            <ul>
              <li>
                <p>Pocetna</p>
              </li>
              <li>
                <p>Proizvodi</p>
              </li>
              <li>
                <p>O Nama</p>
              </li>
              <li>
                <p>Kontakt</p>
              </li>
            </ul>
          </InfoCard>
          <NewsLetter span2>
            <h5>Pretplatite se na SafetyTex putem Email-a</h5>
            <p>
              Pretplatite se na naš newsletter kako <br />
              bi dobili ažurirane novosti o nama.
            </p>
            <form action="">
              <div className="input-wrapp">
                <div>
                  <input type="text" placeholder="Email Address" />
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
                <Link href="#">
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
