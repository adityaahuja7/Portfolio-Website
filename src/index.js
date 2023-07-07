import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import Home from "./Routes/Home";
import Projects from "./Routes/Projects";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AnimatePresence mode = {"wait"}>
      <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>
);
