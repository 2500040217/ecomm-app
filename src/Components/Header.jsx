import image from "../images/blackbag.jpeg";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role"); // "admin" or "user"
  const username = localStorage.getItem("username");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.removeItem("cart");
    navigate("/");
  };

  return (
    <header className="header">
      <div className="head">
        <img src={image} alt="Bag Logo" className="bag-logo" height="40px" width="19px" />
        <h3 className="myshop">My Shop</h3>
      </div>

      <div className="logo">

        {/* ---------------- HOME ALWAYS SHOWN ---------------- */}
        <Link to="/" className="link">Home</Link>

        {/* ---------------- SHOW ADMIN ONLY IF ADMIN LOGGED IN ---------------- */}
        {role === "admin" && (
          <Link to="/admin" className="link">Admin</Link>
        )}

        {/* ---------------- SHOW PRODUCT ONLY FOR USER ---------------- */}
        {role === "user" && (
          <Link to="/product1" className="link">Product</Link>
        )}

        {/* ---------------- SHOW CART ONLY FOR USER ---------------- */}
        {role === "user" && (
          <Link to="/cart" className="link">Cart</Link>
        )}

        {/* ---------------- LOGIN / LOGOUT SWITCH ---------------- */}
        {isLoggedIn === "true" ? (
          <button className="logout" onClick={handleLogout}>Logout</button>
        ) : (
          <button
            className="logout"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}

        {/* ---------------- WELCOME MESSAGE ---------------- */}
        <div className="user">
          {username ? `Welcome, ${username}` : ""}
        </div>
      </div>
    </header>
  );
}

export default Header;
