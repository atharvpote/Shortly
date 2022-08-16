import styled from "styled-components";
import { neutralColors, primaryColors, typeScale } from "../../utils";

export const StyledPitch = styled.section`
  text-align: center;
  margin-inline: 1.5rem;
  color: ${neutralColors.grayishViolet};
`;

export const Title = styled.h2`
  font-size: ${typeScale.heading2};
  color: ${neutralColors.veryDarkBlue};
  line-height: 1.2;
  margin-block-end: 1rem;
`;

export const Button = styled.a`
  text-decoration: none;
  background-color: ${primaryColors.cyan};
  color: ${neutralColors.white};
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  display: inline-block;
  margin-block: 1rem;
`;
