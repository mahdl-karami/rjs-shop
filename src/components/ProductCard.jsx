function ProductCard({ product }) {
  const { title, images, price, id, category } = product;
  return (
    //! parent div lifted up to products.jsx (render with key)
    <>
      <img src={images[0]} alt="" />
      <div>
        <h2>{title}</h2>
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
