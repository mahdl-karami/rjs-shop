//? import hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//? import services
import config from "../services/config";
//? import components
import DetailsImages from "../components/DetailsImages";

function Details() {
  //! states
  const [product, setProduct] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const id = useParams().productId;
  //! fetch product details
  useEffect(() => {
    setLoading(true);
    config
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res);
        setLoading(false);
      })
      .catch((err) => setError(err?.message));
  }, []);
  //! jsx
  if (loading) return <h1>loading</h1>;
  if (error) return <h1>{error}</h1>;
  if (product) {
    const { title, images, description, price } = product;
    return (
      <div className="product-details">
        <DetailsImages images={images} />
        <span>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{price} $</p>
        </span>
      </div>
    );
  }
}

export default Details;
