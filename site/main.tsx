import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ViryaDesignSystem from "../canvases/virya-design-system.canvas";
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ViryaDesignSystem />
  </StrictMode>,
);
