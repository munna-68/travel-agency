import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import PageTransitionProvider from "./components/PageTransition";
import "./i18n";
import "./tokens.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageTransitionProvider>
        <App />
      </PageTransitionProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
