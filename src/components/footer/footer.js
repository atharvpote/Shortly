import { icons } from "../../assets";
import { keyGen, preventDefault } from "../../utils";
import {
  List,
  StyledFooter,
  Link,
  Title,
  Subtitle,
  SocialIcons,
  Article,
  Container,
} from "./footer.styled";

export function Footer() {
  const blocks = [
    {
      title: "Features",
      links: ["Link Shortening", "Branded Links", "Analytics"],
    },
    {
      title: "Resources",
      links: ["Blog", "Developers", "Support"],
    },
    {
      title: "Company",
      links: ["About", "Our Team", "Career", "Contact"],
    },
  ];

  const iconsList = [
    { icon: icons.facebook, alt: "facebook" },
    { icon: icons.twitter, alt: "twitter" },
    { icon: icons.pinterest, alt: "pinterest" },
    { icon: icons.instagram, alt: "instagram" },
  ];

  return (
    <StyledFooter>
      <Container>
        <Title>Shortly</Title>
        {blockMapper(blocks)}
        <Article>
          <SocialIcons>{iconListItems(iconsList)}</SocialIcons>
        </Article>
      </Container>
    </StyledFooter>
  );
}

function blockMapper(blocks) {
  const articles = [];

  for (const block of blocks) articles.push(linkBlock(block, keyGen()));

  return articles;
}

function linkBlock({ title, links }, key) {
  return (
    <Article key={key}>
      <Subtitle>{title}</Subtitle>
      <List>{linkItem(links)}</List>
    </Article>
  );
}

function linkItem(links) {
  const items = [];

  for (const link of links)
    items.push(
      <li key={keyGen()}>
        <Link href="#" onClick={preventDefault}>
          {link}
        </Link>
      </li>
    );

  return items;
}

function iconListItems(iconsList) {
  const list = [];

  for (const icon of iconsList) list.push(iconLink(icon, keyGen()));

  return list;
}

function iconLink({ icon, alt }, key) {
  return (
    <Link href="#" onClick={preventDefault} key={key}>
      <img src={icon} alt={alt} />
    </Link>
  );
}
