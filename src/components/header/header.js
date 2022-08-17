import { icons, illustrations, logos } from "../../assets";
import {
  Hero,
  Toggle,
  TopBar,
  StyledPitch,
  Title,
  Container,
  StyledHeader,
} from "./header.styled";
import { GetStarted } from "../getStartedButton";

export function Header() {
  return (
    <StyledHeader>
      <TopBar>
        <h1>
          <img src={logos.title} alt="Shortly" />
        </h1>
        <Toggle>
          <img src={icons.hamburger} alt="" />
        </Toggle>
      </TopBar>
      <Container>
        <Hero>
          <img src={illustrations.working} alt="" />
        </Hero>
        <StyledPitch>
          <Title>More than just shorter links</Title>
          <p>{`Build your brand's recognition and get detailed insights on how your links are performing.`}</p>
          <GetStarted />
        </StyledPitch>
      </Container>
    </StyledHeader>
  );
}
