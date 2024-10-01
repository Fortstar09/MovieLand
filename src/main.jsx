import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Modal from "./Modal";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Modal />
    <App />
  </StrictMode>
);
