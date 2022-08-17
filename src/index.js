import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Boost, Features, Footer, Header, Shorten } from "./components";
import { GlobalStyles } from "./utils";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <GlobalStyles />
    <Header />
    <Shorten />
    <Features />
    <Boost />
    <Footer />
  </StrictMode>
);
