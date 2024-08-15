//? import hooks
import { useEffect } from "react";
//? import services
import products from "../services/products";
//? import components
import ProductCard from "../components/ProductCard";

function Products({ state: { allProducts, loading, error }, dispatch }) {
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
  if (loading) return <h1>loading</h1>;
  if (error) return <h1>{error}</h1>;
  if (allProducts)
    return (
      <div>
        {allProducts.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    );
}

export default Products;
