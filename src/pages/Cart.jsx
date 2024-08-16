//? import components
import ProductCard from "../components/ProductCard";
//? import helpers
import findIndex from "../helpers/findIndex";
//? import icons
import { FiShoppingCart } from "react-icons/fi";
import { FaSlash } from "react-icons/fa";
function Cart({ state: { allProducts, cartProducts }, dispatch }) {
  return (
    <>
      {cartProducts && cartProducts.length ? (
        <div className="products">
          {cartProducts?.map((product, key) => (
            <div key={key} className="product">
              <ProductCard product={product} allProducts={allProducts} index={findIndex(allProducts, product)} dispatch={dispatch} />
            </div>
          ))}
        </div>
      ) : (
        <div className="cart-empty">
          <FiShoppingCart />
          <FaSlash />
          <div>
            <p>Cart is empty</p>
            <p>- add some items to cart</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
