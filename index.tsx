import { createRoot } from "react-dom/client";
import { App } from "./src/App";
import React from "react";

// Render your React component instead
const root = createRoot(document.getElementById("root")!);
root.render(<App />);
