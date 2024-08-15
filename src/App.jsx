//? import hooks
import { useReducer } from "react";
//? import router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
//? import rout pages
import Layout from "./pages/Layout.jsx";
import Products from "./pages/Products.jsx";

//? reducer
const initialState = {
  allProducts: undefined,
  loading: false,
  error: false,
};
const reducer = (state, { type, payload = undefined }) => {
  switch (type) {
    case "products_sending":
      return { ...state, ["loading"]: true };
    case "products_success":
      return { ...state, ["allProducts"]: payload, ["loading"]: false, ["error"]: false };
    case "products_error":
      return { ...state, ["error"]: payload };
    default:
      console.log("undefined action");
      return state;
  }
};

function App() {
  //! reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  //! react router dom
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
          element: <Products state={state} dispatch={dispatch} />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
