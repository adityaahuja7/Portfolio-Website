import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import AnimatedRoutes from "./Routes/AnimatedRoutes.jsx";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
