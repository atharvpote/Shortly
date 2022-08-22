import { Button } from "./getStartedButton.styled";
import { preventDefault } from "../../utils";

export function GetStarted() {
  return (
    <Button href="#" onClick={preventDefault} aria-label="Get Started">
      Get Started
    </Button>
  );
}
