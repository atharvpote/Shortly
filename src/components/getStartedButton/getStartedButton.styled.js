import { lighten } from "polished";
import styled from "styled-components";
import {
  neutralColors,
  primaryColors,
  typeScale,
  weightScale,
} from "../../utils";

export const Button = styled.a`
  text-decoration: none;
  background-color: ${primaryColors.cyan};
  color: ${neutralColors.white};
  font-size: ${typeScale.heading5};
  font-weight: ${weightScale.bold};
  padding: 0.75rem 2.5rem;
  border-radius: 50px;
  display: inline-block;
  margin-block: 1rem;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${lighten(0.2, primaryColors.cyan)};
  }
`;
