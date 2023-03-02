import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import Loader from "./layouts/loader/Loader";

import "./index.css";

import App from "./app";
import "bootstrap/dist/css/bootstrap.css";
ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <HashRouter>
      <App />
    </HashRouter>
  </Suspense>,

  document.getElementById("root")
);
reportWebVitals();
