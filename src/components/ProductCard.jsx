//? import helpers
import countHandler from "../helpers/countHandler";
import shortIt from "../helpers/shortIt";

function ProductCard({ product, allProducts, index, dispatch }) {
  const { title, images, price, count } = product;
  function clickHandler(action) {
    countHandler(allProducts, index, action, dispatch);
  }
  return (
    //! parent div lifted up to products.jsx (render with key)
    <>
      <div>
        <img src={images[0]} alt="Product Image" />
        <h2>{shortIt(title, 3)}</h2>
        <p>{price}$</p>
      </div>
      <div className="product-buttons">
        <button>!</button>
        <div>
          {count == 0 && <button onClick={() => clickHandler("increase")}>add</button>}
          {count > 0 && (
            <>
              {count == 1 ? <button onClick={() => clickHandler("decrease")}>delete</button> : <button onClick={() => clickHandler("decrease")}>-</button>}
              <p>{count}</p>
              <button onClick={() => clickHandler("increase")}>+</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
