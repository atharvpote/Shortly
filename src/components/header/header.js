import { icons, illustrations, logos } from "../../assets";
import { Hero, Toggle, TopBar } from "./header.styled";

export function Header() {
  return (
    <header>
      <TopBar>
        <h1>
          <img src={logos.title} alt="Shortly" />
        </h1>
        <Toggle>
          <img src={icons.hamburger} alt="" />
        </Toggle>
      </TopBar>
      <Hero>
        <img src={illustrations.working} alt="" />
      </Hero>
    </header>
  );
}
