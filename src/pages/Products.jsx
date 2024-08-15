import { useEffect } from "react";
import products from "../services/products";

function Products({ state, dispatch }) {
  useEffect(() => {
    dispatch({ type: "products_sending" });
    products()
      .get()
      .then((res) => {
        dispatch({ type: "products_success", payload: res.data });
      })
      .catch((error) => dispatch({ type: "error", payload: error }));
  }, []);
  return (
    <div>
      {state?.allProducts?.map((product, index) => (
        <h2 key={index}>{product.title}</h2>
      ))}
    </div>
  );
}

export default Products;
