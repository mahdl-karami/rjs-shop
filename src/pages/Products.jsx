import { useEffect, useState } from "react";
import pruducts from "../services/products";

function Products() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    pruducts()
      .get()
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);
  return (
    <div>
      {products?.map((product) => (
        <h2>{product.title}</h2>
      ))}
    </div>
  );
}

export default Products;
