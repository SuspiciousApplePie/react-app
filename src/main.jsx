import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Greeting, GreetingEnd } from "./Greetings.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <GreetingEnd />
  </StrictMode>,
);
