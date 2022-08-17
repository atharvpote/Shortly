import styled from "styled-components";
import { neutralColors, primaryColors } from "../../utils";

export const Section = styled.section`
  background-color: ${neutralColors.lightGrey};
  text-align: center;
  color: ${neutralColors.grayishViolet};
  padding-block-end: 5rem;

  p {
    max-width: 50ch;
    margin-inline: auto;
  }
`;

export const Title = styled.h2`
  margin-block-start: 0;
  color: ${primaryColors.darkViolet};
`;

export const FeatureCards = styled.div`
  margin-block-start: 5rem;
`;

export const Feature = styled.article`
  background-color: ${neutralColors.white};
  margin-inline: 1.5rem;
  border-radius: 5px;
  padding: 2rem;
  position: relative;
  max-width: 20rem;
  margin-inline: auto;
`;

export const FeatureTitle = styled.h3`
  color: ${primaryColors.darkViolet};
`;

export const Desc = styled.p`
  margin-block-end: 0;
`;

export const Icon = styled.div`
  width: 4rem;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${neutralColors.veryDarkBlue};
  padding: 1rem;
  border-radius: 50%;
`;

export const Bridge = styled.div`
  min-height: 5rem;
  width: 0.5rem;
  background-color: ${primaryColors.cyan};
  margin-inline: auto;
`;
