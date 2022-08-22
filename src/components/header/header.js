import { icons, illustrations, logos } from "../../assets";
import {
  Hero,
  Toggle,
  TopBar,
  StyledPitch,
  Title,
  Container,
  StyledHeader,
  NavList,
  NavLink,
  Navigation,
  SignUp,
} from "./header.styled";
import { GetStarted } from "../getStartedButton";
import { preventDefault } from "../../utils";
import { useState } from "react";

export function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <StyledHeader>
      <TopBar>
        <h1>
          <img src={logos.title} alt="Shortly" />
        </h1>
        <Toggle onClick={() => setShowNav(!showNav)}>
          <img src={icons.hamburger} alt="" />
        </Toggle>
        <Navigation show={showNav}>
          <NavList show={showNav}>
            <div>
              <li>
                <NavLink href="#" onClick={preventDefault}>
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink href="#" onClick={preventDefault}>
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink href="#" onClick={preventDefault}>
                  Resources
                </NavLink>
              </li>
            </div>
            <div>
              <li>
                <NavLink href="#" onClick={preventDefault}>
                  Login
                </NavLink>
              </li>
              <li>
                <SignUp href="#" onClick={preventDefault}>
                  Sign Up
                </SignUp>
              </li>
            </div>
          </NavList>
        </Navigation>
      </TopBar>
      <Container>
        <Hero>
          <img src={illustrations.working} alt="" />
        </Hero>
        <StyledPitch>
          <Title>More than just shorter links</Title>
          <p>{`Build your brand's recognition and get detailed insights on how your links are performing.`}</p>
          <GetStarted />
        </StyledPitch>
      </Container>
    </StyledHeader>
  );
}
