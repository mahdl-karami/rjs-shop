import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//? import components
import App from "./App.jsx";
import Layout from "./router/Layout.jsx";
//? styles
import "./index.css";

//? react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
