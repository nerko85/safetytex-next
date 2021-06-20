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

export default function Header() {
  return (
    <StyledHeader>
      <HeaderTop>
        <div className="container">
          <div className="icons">
            <FaInstagram />
            <FaTwitter />
            <FaFacebookF />
          </div>
        </div>
      </HeaderTop>
      <div className="container">
        <div className="inner">
          <Logo>
            <Link href="/">
              <a>
                <Image src="/logo.svg" height="50px" width="50px" />
                <Image src="/logo-txt.svg" height="25px" width="260px" />
              </a>
            </Link>
          </Logo>
          <Navigation>
            <ul>
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
