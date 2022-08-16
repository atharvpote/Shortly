import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header, Pitch } from "./components";
import { GlobalStyles } from "./utils";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <GlobalStyles />
    <Header />
    <Pitch />
  </StrictMode>
);
