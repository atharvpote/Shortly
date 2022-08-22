import { hideVisually, lighten } from "polished";
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
    padding: 2rem;
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
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${lighten(0.2, primaryColors.cyan)};
  }

  @media (min-width: 768px) {
    width: auto;
    flex-basis: 25%;
    font-size: ${typeScale.heading5};
  }
`;

export const ResultDiv = styled.div`
  background-color: ${neutralColors.lightGrey};
  min-height: 6rem;
  padding-block-end: 2rem;
`;

export const Results = styled.div`
  min-height: 6rem;
`;

export const ResultBlock = styled.div`
  background-color: ${neutralColors.white};
  margin-inline: 1.5rem;
  padding: 0.5rem 0;
  border-radius: 5px;
  margin-block-end: 1rem;

  &:last-of-type {
    margin-block-end: initial;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const OriginalUrl = styled.p`
  font-size: ${typeScale.paragraph};
  color: ${primaryColors.darkViolet};
  margin: 0.5rem 1rem;
  overflow: hidden;
  white-space: nowrap;

  text-overflow: ellipsis;

  @media (min-width: 768px) {
    flex-basis: 40%;
  }
`;

export const ShortUrl = styled(OriginalUrl)`
  color: ${primaryColors.cyan};

  @media (min-width: 768px) {
    justify-self: flex-end;
  }
`;

export const Divider = styled.div`
  min-height: 1px;
  background-color: ${neutralColors.lightGrey};

  @media (min-width: 768px) {
    ${hideVisually()}
  }
`;

export const CopyButton = styled.button`
  display: block;
  width: calc(100% - 2rem);
  margin: 1rem;
  padding-block: 0.75rem;
  border-radius: 5px;
  border: none;
  background-color: ${({ active }) =>
    active ? primaryColors.darkViolet : primaryColors.cyan};
  color: ${neutralColors.white};
  font-weight: ${weightScale.bold};
  font-size: ${typeScale.paragraph};
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${({ active }) =>
      active ? primaryColors.darkViolet : lighten(0.2, primaryColors.cyan)};
  }

  @media (min-width: 768px) {
    flex-basis: 20%;
  }
`;
