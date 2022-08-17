import { StyledPitch, Title } from "./pitch.styled";
import { GetStarted } from "../getStartedButton";

export function Pitch() {
  return (
    <StyledPitch>
      <Title>More than just shorter links</Title>
      <p>{`Build your brand's recognition and get detailed insights on how your links are performing.`}</p>
      <GetStarted />
    </StyledPitch>
  );
}
