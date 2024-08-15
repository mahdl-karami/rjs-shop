//? import rout pages
import Layout from "./pages/Layout.jsx";
import Products from "./pages/Products.jsx";

//? react router dom
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to={`/products`} />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
