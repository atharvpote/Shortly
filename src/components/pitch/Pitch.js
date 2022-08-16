import { preventDefault } from "../../utils";
import { Button, StyledPitch, Title } from "./pitch.styled";

export function Pitch() {
  return (
    <StyledPitch>
      <Title>More than just shorter links</Title>
      <p>{`Build your brand's recognition and get detailed insights on how your links are performing.`}</p>
      <Button href="#" onClick={preventDefault}>
        Get Started
      </Button>
    </StyledPitch>
  );
}
