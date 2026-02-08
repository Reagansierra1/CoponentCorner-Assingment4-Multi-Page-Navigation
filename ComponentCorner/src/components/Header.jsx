import "./Header.css";
import { Link } from "react-router-dom";

function Header({ storeName, cartAmount }) {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="store-name">{storeName}</div>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="#" className="nav-link">About</Link>
          <Link to="#" className="nav-link">Contact</Link>
        </nav>
        <Link to="/cart" className="cart-container"> 
            <span className="cart-icon">🛒</span> 
            <p className="cart-badge">{cartAmount}</p>
        </Link>
      </div>
    </header>
  );
}

export default Header;