import shortIt from "../helpers/shortIt";

function ProductCard({ product }) {
  const { title, images, price, id, category } = product;
  return (
    //! parent div lifted up to products.jsx (render with key)
    <>
      <div>
      <img src={images[0]} alt="product title" />
        <h2>{shortIt(title, 3)}</h2>
        <p>{price}$</p>
      </div>
      <div className="product-buttons">
        <button>!</button>
        <div>
          <button>-</button>
          <button>4</button>
          <button>+</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
