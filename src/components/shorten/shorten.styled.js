import { hideVisually } from "polished";
import styled from "styled-components";
import { backgrounds } from "../../assets";
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
  background-color: ${primaryColors.darkViolet};
  background-image: url(${backgrounds.shortenMobile});
  background-position: 4rem -4rem;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1.5rem;
  border-radius: 10px;
  transform: translateY(50%);
  margin-inline: 1.5rem;
  max-width: 1200px;

  @media (min-width: 768px) {
    background-image: url(${backgrounds.shortenDesktop});
    background-position: 0;
    display: flex;
    gap: 1rem;
    padding: 3rem;
  }

  @media (min-width: 1200px) {
    margin-inline: auto;
  }
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
  font-size: ${typeScale.paragraph};

  @media (min-width: 768px) {
    flex-basis: 75%;
    padding: 1.5rem;
  }

  &::placeholder {
    font-weight: ${weightScale.medium};
    color: ${neutralColors.gray};
    font-family: ${fontFamily};
    font-size: ${typeScale.helperText};

    @media (min-width: 768px) {
      flex-basis: 80%;
      font-size: ${typeScale.paragraph};
    }
  }
`;

export const Error = styled.span`
  display: block;
  min-height: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
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

  @media (min-width: 768px) {
    width: auto;
    flex-basis: 25%;
    font-size: ${typeScale.heading5};
  }
`;

export const ResultDiv = styled.div`
  background-color: ${neutralColors.lightGrey};
  min-height: 6rem;
`;

export const Results = styled.div`
  min-height: 10rem;
`;
