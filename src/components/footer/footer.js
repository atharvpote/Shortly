import { icons } from "../../assets";
import { preventDefault } from "../../utils";
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
        {mapBlock(blocks)}
        <Article>
          <SocialIcons>{iconListItems(iconsList)}</SocialIcons>
        </Article>
      </Container>
    </StyledFooter>
  );
}

function mapBlock(blocks) {
  const articles = [];

  for (const obj of blocks) articles.push(block(obj));

  return articles;
}

function block({ title, links }) {
  return (
    <Article>
      <Subtitle>{title}</Subtitle>
      <List>{linkItem(links)}</List>
    </Article>
  );
}

function linkItem(links) {
  const items = [];

  for (const link of links)
    items.push(
      <li>
        <Link href="#" onClick={preventDefault}>
          {link}
        </Link>
      </li>
    );

  return items;
}

function iconListItems(icons) {
  const list = [];

  for (const icon of icons) list.push(iconLink(icon));

  return list;
}

function iconLink({ icon, alt }) {
  return (
    <Link href="#" onClick={preventDefault}>
      <img src={icon} alt={alt} />
    </Link>
  );
}
