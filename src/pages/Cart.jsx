import ProductCard from "../components/ProductCard";
import findIndex from "../helpers/findIndex";

function Cart({ state: { allProducts, cartProducts }, dispatch }) {
  return (
    <div className="products">
      {cartProducts?.map((product, key) => (
        <div key={key} className="product">
          <ProductCard product={product} allProducts={allProducts} index={findIndex(allProducts, product)} dispatch={dispatch} />
        </div>
      ))}
    </div>
  );
}

export default Cart;
