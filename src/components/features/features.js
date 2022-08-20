import { icons } from "../../assets";
import { keyGen } from "../../utils";
import {
  Bridge,
  Container,
  Desc,
  Feature,
  FeatureCards,
  FeatureTitle,
  Icon,
  Section,
  Title,
} from "./features.styled";

export function Features() {
  const features = [
    {
      name: "Brand Recognition",
      desc: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content",
      icon: icons.brandRecognition,
    },
    {
      name: "Detailed Records",
      desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      icon: icons.detailedRecords,
    },
    {
      name: "Fully Customizable",
      desc: "Improve brand awareness and content discoverability through customizable link, supercharging audience engagement.",
      icon: icons.fullyCustomizable,
    },
  ];

  return (
    <Container>
      <Section>
        <Title>Advanced Statistics</Title>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <FeatureCards>{bridgedCards(features)}</FeatureCards>
      </Section>
    </Container>
  );
}

function bridgedCards(features) {
  const sequence = [];

  for (let index in features) {
    if (index > 0) sequence.push(<Bridge id={index} key={keyGen()} />);

    sequence.push(featureCard(features[index], keyGen()));
  }

  return sequence;
}

function featureCard({ name, desc, icon }, key) {
  return (
    <Feature key={key}>
      <FeatureTitle>{name}</FeatureTitle>
      <Desc>{desc}</Desc>
      <Icon>
        <img src={icon} alt="" />
      </Icon>
    </Feature>
  );
}
