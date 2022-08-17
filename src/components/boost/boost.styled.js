import styled from "styled-components";
import { backgrounds } from "../../assets";
import { neutralColors, primaryColors, typeScale } from "../../utils";

export const Section = styled.section`
  text-align: center;
  background-color: ${primaryColors.darkViolet};
  background-image: url(${backgrounds.boostMobile});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    background-image: url(${backgrounds.boostDesktop});
  }

  div {
    padding-block: 5rem;
  }

  h2 {
    margin-bottom: 0.5rem;
    font-size: ${typeScale.heading4};
    color: ${neutralColors.white};
  }
`;
