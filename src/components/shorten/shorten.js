import { preventDefault } from "../../utils";
import {
  ResultDiv,
  Label,
  InputDiv,
  Form,
  UrlInput,
  SubmitButton,
  Error,
  Results,
} from "./shorten.styled";

export function Shorten() {
  return (
    <div>
      <InputDiv>
        <Form onSubmit={preventDefault}>
          <Label htmlFor="input" />
          <UrlInput id="input" placeholder="Shorten a link here..." />
          <Error />
          <SubmitButton onClick={preventDefault}>Shorten It!</SubmitButton>
        </Form>
      </InputDiv>
      <ResultDiv>
        <Results />
      </ResultDiv>
    </div>
  );
}
