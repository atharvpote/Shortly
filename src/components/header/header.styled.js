import { fluidRange, remToPx } from "polished";
import styled from "styled-components";
import { neutralColors } from "../../utils";

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

export const Hero = styled.div`
  overflow-x: hidden;
  display: flex;
  align-items: center;
  min-height: ${fluidRange(
    {
      prop: "min-height",
      fromSize: remToPx(17),
      toSize: remToPx(45),
    },
    "280px",
    "768px"
  )};

  img {
    transform: translateX(25%) scale(1.4);
  }
`;
