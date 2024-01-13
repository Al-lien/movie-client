// react
import React from "react";
import ReactDOM from "react-dom/client";

// react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages && components
import App from "./App.jsx";

// styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
