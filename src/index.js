import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Boost, Features, Footer, Header, Shorten } from "./components";
import { GlobalStyles } from "./utils";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <GlobalStyles />
    <main>
      <Header />
      <Shorten />
      <Features />
      <Boost />
    </main>
    <Footer />
  </StrictMode>,
);
