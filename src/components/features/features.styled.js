import styled from "styled-components";
import { neutralColors, primaryColors } from "../../utils";

export const Container = styled.div`
  background-color: ${neutralColors.lightGrey};
`;

export const Section = styled.section`
  max-width: 1200px;
  margin-inline: auto;
  text-align: center;
  color: ${neutralColors.grayishViolet};
  padding-block-end: 5rem;
  padding-inline: 1.5rem;

  p {
    max-width: 50ch;
    margin-inline: auto;
  }
`;

export const Title = styled.h2`
  margin-block-start: 0;
  padding-top: 2rem;
  color: ${primaryColors.darkViolet};
`;

export const FeatureCards = styled.div`
  margin-block-start: 5rem;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    min-height: 23rem;
    align-items: center;
  }
`;

export const Feature = styled.article`
  background-color: ${neutralColors.white};
  margin-inline: 1.5rem;
  border-radius: 10px;
  padding: 2rem;
  position: relative;
  max-width: 20rem;
  margin-inline: auto;

  @media (min-width: 1024px) {
    margin-inline: initial;
    max-width: initial;

    &:first-of-type {
      align-self: flex-start;
    }

    &:last-of-type {
      align-self: flex-end;
    }
  }
`;

export const FeatureTitle = styled.h3`
  color: ${primaryColors.darkViolet};

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

export const Desc = styled.p`
  margin-block-end: 0;

  @media (min-width: 1024px) {
    text-align: left;
  }
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

  @media (min-width: 1024px) {
    left: 2rem;
    transform: translate(0, -50%);
  }
`;

export const Bridge = styled.div`
  min-height: 5rem;
  width: 0.5rem;
  background-color: ${primaryColors.cyan};
  margin-inline: auto;

  @media (min-width: 1024px) {
    margin-inline: initial;
    min-height: 0.5rem;
    width: initial;
    flex-basis: 5%;
    align-self: center;
  }
`;
