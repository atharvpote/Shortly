import { fluidRange, hideVisually, lighten, remToPx } from "polished";
import styled from "styled-components";
import { neutralColors, primaryColors, typeScale } from "../../utils";

export const StyledHeader = styled.header`
  max-width: 1200px;
  margin-inline: auto;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 1.5rem;
`;

export const Toggle = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  width: 2.5rem;
  color: ${neutralColors.gray};

  @media (min-width: 768px) {
    ${hideVisually()}
  }
`;

export const Navigation = styled.nav`
  position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;
  z-index: 10;
  overflow: hidden;

  @media (min-width: 768px) {
    position: initial;
  }
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  background-color: ${primaryColors.darkViolet};
  margin-inline: 1rem;
  border-radius: 10px;
  text-align: center;
  transform: ${({ show }) => (show ? `translateX(0)` : `translateX(150%)`)};
  transition: transform 0.5s;

  @media (min-width: 768px) {
    background-color: initial;
    transform: initial;
    display: flex;
    justify-content: space-between;
  }

  div {
    padding: 2rem 0;
    margin-inline: 2rem;

    @media (min-width: 768px) {
      padding: initial;
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    &:first-of-type {
      border-bottom: 1px solid ${neutralColors.grayishViolet};

      @media (min-width: 768px) {
        border: none;
      }
    }
  }

  li {
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      margin-bottom: initial;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${neutralColors.white};

  @media (min-width: 768px) {
    color: ${neutralColors.gray};
    transition: color 0.5s;

    &:hover {
      color: ${neutralColors.veryDarkBlue};
    }
  }
`;

export const SignUp = styled(NavLink)`
  background-color: ${primaryColors.cyan};
  display: block;
  padding: 1rem 0;
  border-radius: 50px;
  transition: background-color 0.5s;

  &:hover {
    color: ${neutralColors.white};
    background-color: ${lighten(0.2, primaryColors.cyan)};
  }

  @media (min-width: 768px) {
    color: ${neutralColors.white};
    padding-inline: 2rem;
  }
`;

export const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const Hero = styled.div`
  overflow-x: hidden;
  display: flex;
  align-items: center;
  min-height: ${fluidRange(
    {
      prop: "min-height",
      fromSize: remToPx(18),
      toSize: remToPx(46),
    },
    "280px",
    "768px"
  )};

  img {
    transform: translateX(25%) scale(1.4);
  }

  @media (min-width: 768px) {
    order: 2;
    flex-basis: 50%;
    min-height: ${fluidRange(
      {
        prop: "min-height",
        fromSize: remToPx(18),
        toSize: remToPx(34),
      },
      "768px",
      "1440px"
    )};

    img {
      transform: translateX(15%) scale(1.2);

      @media (min-width: 1200px) {
        transform: translateX(0) scale(1);
      }
    }
  }
`;

export const StyledPitch = styled.section`
  text-align: center;
  margin-inline: 1.5rem;
  color: ${neutralColors.grayishViolet};

  p {
    max-width: 50ch;
    margin-inline: auto;

    @media (min-width: 768px) {
      margin-inline: initial;
    }
  }

  @media (min-width: 768px) {
    flex-basis: 50%;
    text-align: left;

    h2 {
      font-size: ${typeScale.heading1};
    }

    p {
      font-size: ${typeScale.paragraph};
      max-width: 40ch;
    }
  }
`;

export const Title = styled.h2`
  font-size: ${typeScale.heading2};
  color: ${neutralColors.veryDarkBlue};
  line-height: 1.2;
  margin-block-end: 1rem;
`;
