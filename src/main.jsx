import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Error from "./components/Error.jsx";

import About from "./components/About.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";

import "../dist/main.css";

import eruda from "eruda";
// eruda.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
