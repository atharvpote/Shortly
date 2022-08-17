import styled from "styled-components";
import { neutralColors, typeScale } from "../../utils";

export const StyledFooter = styled.footer`
  background-color: ${neutralColors.veryDarkViolet};
  color: ${neutralColors.white};
  padding: 2rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: ${typeScale.heading3};
`;

export const Article = styled.article`
  margin-block-end: 2rem;
`;

export const Subtitle = styled.h3`
  font-size: ${typeScale.paragraph};
  margin-bottom: 0.5rem;
`;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${neutralColors.lightGrey};
  font-size: ${typeScale.helperText};
`;

export const SocialIcons = styled.ul`
  padding-left: 0;
  list-style-type: none;
  display: flex;
  width: 10rem;
  margin-inline: auto;
  justify-content: space-between;

  li,
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    cursor: pointer;
  }
`;
