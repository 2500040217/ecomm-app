import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  // Load cart on first render
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
    calculateTotal(cart);
  }, []);

  // Function to calculate total
  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => acc + item.price, 0);
    setTotal(sum);
  };

  // Remove item from cart
  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    calculateTotal(updatedCart);
  };

  return (
    <>
      <Header />

      <div
        style={{
          paddingTop: "120px",
          paddingBottom: "80px",
          textAlign: "center",
        }}
      >
        <h1>Your Cart</h1>

        {cartItems.length === 0 ? (
          <h3>No items in cart</h3>
        ) : (
          <>
            <div className="products">
              {cartItems.map((item, index) => (
                <div className="product" key={index}>
                  <img src={item.img} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <div>
                  <button onClick={() => decreaseQty(index)}>-</button>
                  <span style={{ margin: "0 20px" }}>Item count: {item.quantity}</span>
                  <button onClick={() => increaseQty(index)}>+</button>
                </div>

                  {/* REMOVE BUTTON */}
                  <button
                    onClick={() => removeItem(index)}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "8px 14px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Cumulative Total */}
            <h2 style={{ marginTop: "40px" }}>
              Total Amount: ₹{total}
            </h2>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;
