import React from "react";
import {
  Header as StyledHeader,
  HeaderTop,
  Logo,
  Navigation,
} from "./Header.style";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Button from "../../../containers/Button/Button";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <StyledHeader>
      <HeaderTop>
        <div className="container">
          <div className="icons">
            <Link href="/">
              <a target="blank">
                <FaInstagram />
              </a>
            </Link>
            <Link href="/">
              <a target="blank">
                <FaTwitter />
              </a>
            </Link>
            <Link href="/">
              <a target="blank">
                <FaFacebookF />
              </a>
            </Link>
          </div>
        </div>
      </HeaderTop>
      <div className="container">
        <div className="inner">
          <Logo>
            <Link href="/">
              <a>
                <Image src="/logo.svg" height="50px" width="50px" />
                {pathname === "/" ? (
                  <Image src="/logo-txt.svg" height="25px" width="260px" />
                ) : (
                  <Image src="/logo-dark.png" height="25px" width="260px" />
                )}
              </a>
            </Link>
          </Logo>
          <Navigation>
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
                <Link href="/kontakt">
                  <a>Kontakt</a>
                </Link>
              </li>
              <li>
                <Link href="/o-nama">
                  <a>O nama</a>
                </Link>
              </li>
              <li>
                <Button>+381 61 6598696</Button>
              </li>
            </ul>
          </Navigation>
        </div>
      </div>
    </StyledHeader>
  );
}
