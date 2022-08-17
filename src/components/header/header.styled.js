import { fluidRange, remToPx } from "polished";
import styled from "styled-components";
import { neutralColors, typeScale } from "../../utils";

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
