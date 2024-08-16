//? import helpers
import countHandler from "../helpers/countHandler";
import shortIt from "../helpers/shortIt";
//? import icons
import { TbListDetails } from "react-icons/tb";
import { FiPlus, FiMinus } from "react-icons/fi";
import { BiCartAdd } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
//? react router dom
import { Link } from "react-router-dom";

function ProductCard({ product, allProducts, index, dispatch }) {
  const { title, images, price, count, id } = product;
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
        <button>
          <Link to={`${id}`}>
            <TbListDetails />
          </Link>
        </button>
        <div>
          {count == 0 && (
            <button onClick={() => clickHandler("increase")}>
              <BiCartAdd />
            </button>
          )}
          {count > 0 && (
            <>
              {count == 1 ? (
                <button onClick={() => clickHandler("decrease")}>
                  <RiDeleteBinLine />
                </button>
              ) : (
                <button onClick={() => clickHandler("decrease")}>
                  <FiMinus />
                </button>
              )}
              <p>{count}</p>
              <button onClick={() => clickHandler("increase")}>
                <FiPlus />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
