import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
