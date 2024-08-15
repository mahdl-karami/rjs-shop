//? import hooks
import { useEffect } from "react";
//? import services
import products from "../services/products";

function Products({ state, dispatch }) {
  //! fetch products
  useEffect(() => {
    dispatch({ type: "products_sending" });
    products()
      .get()
      .then((res) => {
        dispatch({ type: "products_success", payload: res.data });
      })
      .catch((error) => dispatch({ type: "products_error", payload: error }));
  }, []);
  //! jsx
  return (
    <div>
      {state?.allProducts.map((product, index) => (
        <h2 key={index}>{product.title}</h2>
      ))}
    </div>
  );
}

export default Products;
