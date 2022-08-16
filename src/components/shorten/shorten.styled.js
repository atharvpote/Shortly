import { hideVisually } from "polished";
import styled from "styled-components";
import { backgrounds } from "../../assests";
import {
  fontFamily,
  neutralColors,
  primaryColors,
  weightScale,
  typeScale,
} from "../../utils";

export const InputDiv = styled.div`
  background-color: ${neutralColors.white};
`;

export const Form = styled.form`
  margin-inline: 1.5rem;
  background-color: ${primaryColors.darkViolet};
  background-image: url(${backgrounds.shortenMobile});
  background-position: 4rem -4rem;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1.5rem;
  border-radius: 10px;
  transform: translateY(50%);
`;

export const Label = styled.label`
  ${hideVisually()}
`;

export const UrlInput = styled.input.attrs({ type: "text" })`
  display: block;
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  border: none;

  &::placeholder {
    font-weight: ${weightScale.medium};
    color: ${neutralColors.gray};
    font-family: ${fontFamily};
    font-size: ${typeScale.helperText};
  }
`;

export const Error = styled.span`
  display: block;
  min-height: 1rem;
`;

export const SubmitButton = styled.button.attrs({ type: "submit" })`
  display: block;
  width: 100%;
  padding: 0.75rem;
  border-radius: 5px;
  border: none;
  background-color: ${primaryColors.cyan};
  font-weight: ${weightScale.bold};
  color: ${neutralColors.white};
  font-size: ${typeScale.paragraph};
`;

export const ResultDiv = styled.div`
  background-color: ${neutralColors.lightGrey};
  min-height: 6rem;
`;

export const Results = styled.div`
  min-height: 10rem;
`;
