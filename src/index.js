import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "./utils";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <GlobalStyles />
    <h1>Shortly</h1>
  </StrictMode>
);
