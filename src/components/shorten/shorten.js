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

  useEffect(() => {
    const localData = getFromLocalStorage();

    if (!localData) setResults([]);
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
            getUrls(url, setResponse);
          }}
        >
          <Label htmlFor="input" />
          <UrlInput
            id="input"
            placeholder="Shorten a link here..."
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <Error />
          <SubmitButton
            onClick={(e) => {
              preventDefault(e);
              getUrls(url, setResponse);
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

function getUrls(url, handler) {
  const key = `https://api.shrtco.de/v2/shorten?url=${url}`;

  fetch(key)
    .then((res) => res.json())
    .then((res) => handler(res));
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
