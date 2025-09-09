import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // ou ./indice.css se for esse o nome

createRoot(document.getElementById("root")).render(<App />);
