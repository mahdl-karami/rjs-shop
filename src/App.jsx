//? import hooks
import { useReducer } from "react";
//? import router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
//? import rout pages
import Layout from "./pages/Layout.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";

//? reducer
const initialState = {
  allProducts: undefined,
  cartProducts: undefined,
  loading: false,
  error: false,
};
const reducer = (state, { type, payload = undefined }) => {
  switch (type) {
    case "products_sending":
      return { ...state, ["loading"]: true };
    case "products_success":
      const newProducts = payload.map((product) => ({ ...product, ["count"]: 0 }));
      return { ...state, ["allProducts"]: newProducts, ["loading"]: false, ["error"]: false };
    case "products_error":
      return { ...state, ["error"]: payload, ["loading"]: false };
    case "products_edit_count":
      return { ...state, ["allProducts"]: payload };
    case "products_update_cart":
      return { ...state, ["cartProducts"]: state?.allProducts?.filter((p) => p.count) };
    default:
      console.log("undefined action");
      return state;
  }
};

function App() {
  //! reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.cartProducts);
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
        {
          path: "cart",
          element: <Cart state={state} dispatch={dispatch} />,
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
