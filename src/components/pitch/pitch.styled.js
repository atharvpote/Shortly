import styled from "styled-components";
import { neutralColors, typeScale } from "../../utils";

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
