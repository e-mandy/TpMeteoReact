import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MeteoProvider from "./providers/MeteoProvider.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MeteoProvider>
      <App />
      <Toaster />
    </MeteoProvider>
  </StrictMode>,
);
