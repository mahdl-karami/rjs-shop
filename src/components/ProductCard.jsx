function ProductCard({ product }) {
  const { title, images, price, id, category } = product;
  return (
    //! parent div lifted up to products.jsx (render with key)
    <>
      <img src={images[0]} alt="" />
      <h2>{title}</h2>
      <p>{price}$</p>
      <div>
        <button>!</button>
        <div>
          <button>add</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
