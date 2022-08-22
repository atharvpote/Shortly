import { useEffect, useState } from "react";
import { keyGen, preventDefault } from "../../utils";
import {
  ResultDiv,
  Label,
  InputDiv,
  Form,
  UrlInput,
  SubmitButton,
  Error,
  Results,
  ResultBlock,
  OriginalUrl,
  ShortUrl,
  CopyButton,
  Divider,
} from "./shorten.styled";

export function Shorten() {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState(null);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let localData = getFromLocalStorage();

    if (!localData) setResults([]);
    else if (localData.length > 3) setResults(localData.slice(0, 3));
    else setResults(localData);
  }, []);

  useEffect(() => {
    if (response !== null) {
      if (isResponseOk(response)) {
        if (results.length >= 3) {
          setResults([
            resultObject(url, response),
            ...results.slice(0, results.length - 1),
          ]);
          setToLocalStorage([
            resultObject(url, response),
            ...results.slice(0, results.length - 1),
          ]);
        }

        setResults([resultObject(url, response), ...results]);
        setToLocalStorage([resultObject(url, response), ...results]);
      }
    }
  }, [response]);

  return (
    <div>
      <InputDiv>
        <Form
          onSubmit={(e) => {
            preventDefault(e);
            getUrls(url, setResponse, setError);
          }}
        >
          <Label htmlFor="input" />
          <UrlInput
            id="input"
            placeholder="Shorten a link here..."
            value={url}
            onChange={(e) => {
              if (error.length) setError("");

              setUrl(e.target.value);
            }}
            error={error}
          />
          <Error>{error}</Error>
          <SubmitButton
            onClick={(e) => {
              preventDefault(e);
              getUrls(url, setResponse, setError);
            }}
          >
            Shorten It!
          </SubmitButton>
        </Form>
      </InputDiv>
      <ResultDiv>
        <Results />
        {results.map(({ original, short }, index) => (
          <ResultUrl
            id={index + 1}
            original={original}
            short={short}
            key={keyGen()}
          />
        ))}
      </ResultDiv>
    </div>
  );
}

function ResultUrl({ original, short, id }) {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <ResultBlock id={id} key={keyGen()}>
      <OriginalUrl>{original}</OriginalUrl>
      <Divider />
      <ShortUrl>{short}</ShortUrl>
      <CopyButton
        active={activeButton === id}
        onClick={() => {
          navigator.clipboard.writeText(short);

          setActiveButton(id);
          setTimeout(() => {
            setActiveButton(null);
          }, 1000);
        }}
      >
        {activeButton === id ? "Copied" : "Copy"}
      </CopyButton>
    </ResultBlock>
  );
}

function getUrls(url, handler, errorHandler) {
  const key = `https://api.shrtco.de/v2/shorten?url=${url}`;

  fetch(key)
    .then((res) => res.json())
    .then((res) => {
      if (res.ok) {
        errorHandler("");
        handler(res);
      } else handleError(res, errorHandler);
    });
}

function handleError(res, handler) {
  if (res.error_code == 1) handler("Please add a link");
  if (res.error_code == 2) handler("Link is invalid");
  if (res.error_code == 3)
    handler("Too many requests, Wait a second and try again");
  if (res.error_code == 4)
    handler("IP-Address has been blocked because of violating our TOS");
  if (res.error_code == 5) handler("shrtcode code (slug) already taken/in use");
  if (res.error_code == 6) handler("Unknown error");
  if (res.error_code == 7)
    handler(`No code specified ("code" parameter is empty)`);
  if (res.error_code == 8)
    handler(
      "Invalid code submitted (code not found/there is no such short-link)"
    );
  if (res.error_code == 9) handler("Missing required parameters");
  if (res.error_code == 10) handler("Trying to shorten a disallowed Link");
}

function extractShortUrl(res) {
  return res.result.full_short_link;
}

function isResponseOk(res) {
  return res.ok;
}

function resultObject(original, res) {
  return { original, short: extractShortUrl(res) };
}

function setToLocalStorage(data) {
  localStorage.setItem("results", JSON.stringify(data));
}

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("results"));
}
