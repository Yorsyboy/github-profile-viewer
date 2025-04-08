import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SearchHistoryProvider } from "./context/SearchContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <SearchHistoryProvider>
        <App />
      </SearchHistoryProvider>
    </ThemeProvider>
  </StrictMode>
);
