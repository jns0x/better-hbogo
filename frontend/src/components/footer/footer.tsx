import React from "react";
import Link from "next/link";

import {
  StyledFooter,
  FooterNav,
  NavLink,
  Separator,
  Copyright,
  Icon,
  Container,
  LinksContainer,
} from "./footer.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterNav>
        <Container>
          <Link href="#">
            <NavLink>
              <Icon src="/images/facebook.svg" />
            </NavLink>
          </Link>
          <Link href="#">
            <NavLink>
              <Icon src="/images/twitter.svg" />
            </NavLink>
          </Link>
          <Link href="#">
            <NavLink>
              <Icon src="/images/instagram.svg" />
            </NavLink>
          </Link>
          <Link href="#">
            <NavLink>
              <Icon src="/images/youtube.svg" />
            </NavLink>
          </Link>
        </Container>
      </FooterNav>
      <FooterNav>
        <Container style={{ flexDirection: "column" }}>
          <Separator />
          <LinksContainer>
            <Link href="#">
              <NavLink>FAQ</NavLink>
            </Link>
            <Link href="#">
              <NavLink>Terms of use</NavLink>
            </Link>
            <Link href="#">
              <NavLink>Privacy policy</NavLink>
            </Link>
            <Link href="#">
              <NavLink>Contact</NavLink>
            </Link>
            <Link href="#">
              <NavLink>Cookie policy</NavLink>
            </Link>
            <Link href="#">
              <NavLink>English</NavLink>
            </Link>
          </LinksContainer>
          <Separator />
        </Container>
      </FooterNav>
      <Copyright>
        © 2020 Home Box Office, Inc. All Rights Reserved. This site may contain
        mature content.
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;
