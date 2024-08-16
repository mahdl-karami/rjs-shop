//? import hooks
import { useReducer } from "react";
//? import router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
//? import rout pages
import Layout from "./pages/Layout.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Details from "./pages/Details.jsx";

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
      //! adding count to products
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
  //! react router dom
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout cartProducts={state.cartProducts} />,
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
          path: "products/:productId",
          element: <Details />,
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
