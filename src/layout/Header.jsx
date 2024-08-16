//? react router dom
import { Link, useLocation } from "react-router-dom";
//? import icons
import { BsCart2 } from "react-icons/bs";
import { FaLongArrowAltLeft } from "react-icons/fa";
function Header() {
  const pathName = useLocation().pathname;
  return (
    <header>
      {pathName == "/cart" ? (
        <h2>
          <Link className="link" to="/products">
            <FaLongArrowAltLeft />
            Back to products
          </Link>
        </h2>
      ) : (
        <form>
          <input type="text" name="search" placeholder="Search" />
          <select name="filter">
            <option value="">all</option>
            <option value="">test12</option>
            <option value="">test123</option>
          </select>
        </form>
      )}
      <button className="cart-btn">
        <Link to="/cart" className="link">
          <BsCart2 />
        </Link>
        <span>10</span>
      </button>
    </header>
  );
}

export default Header;
