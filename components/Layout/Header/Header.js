import React, { useState } from "react";
import {
  Header as StyledHeader,
  HeaderTop,
  Logo,
  Navigation,
} from "./Header.style";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Button from "../../../containers/Button/Button";
import Link from "next/link";
import { useRouter } from "next/router";

// const handleClick = () => {
//   console.log("clicked");
// };

export default function Header() {
  const [active, setActive] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  // router.events.on("routeChangeComplete", setActive(false));
  return (
    <StyledHeader active={active}>
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
            <Link href="https://www.facebook.com/SafetyTex-100467918184328/?ref=py_c">
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
                  <Image
                    src="/logo-txt.svg"
                    className="typography"
                    height="25px"
                    width="260px"
                  />
                ) : (
                  <Image
                    src="/logo-dark.png"
                    className="typography"
                    height="25px"
                    width="260px"
                  />
                )}
              </a>
            </Link>
          </Logo>
          <Navigation active={active}>
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
                <Button url="tel:+381616598696">+381 61 6598696</Button>
              </li>
            </ul>
          </Navigation>
          <a className="hambMenu" onClick={() => setActive(!active)}>
            {active ? <HiOutlineX /> : <HiOutlineMenu />}
          </a>
        </div>
      </div>
    </StyledHeader>
  );
}
