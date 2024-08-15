import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <button>
        <Link to="/cart">cart</Link>
      </button>
    </div>
  );
}

export default Header;
