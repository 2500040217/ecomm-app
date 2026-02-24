import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Product1() {
  const [product, setproduct] = useState([]);
  const navigate = useNavigate();

 
  useEffect(() => {
    const approved = JSON.parse(localStorage.getItem("approvedProducts")) || [];
    setproduct(approved);
  }, []);

  const handleAddToCart = (p) => {
    const isloggedin = localStorage.getItem("isLoggedIn");

    if (isloggedin == "true") {
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      cartData.push(p);
      localStorage.setItem("cart", JSON.stringify(cartData));
      navigate("/cart");
    } else {
      alert("Please Login first");
      navigate("/login");
    }
  };

  return (
    <>
      <Header />

      <section className="products">
        {product.length === 0 && (
          <h2 style={{ textAlign: "center", marginTop: "50px" }}>
            No products approved by admin yet.
          </h2>
        )}

        {product.map((p) => (
          <div className="product" key={p.id}>
            <img src={p.thumbnail} alt={p.title} />
            <h3>{p.title}</h3>
            <p>Category: {p.category}</p>
            <p>Price: ${p.price}</p>

            <button onClick={() => handleAddToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}

export default Product1;
