import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function Admin() {
  const [products, setProducts] = useState([]);
  const [approved, setApproved] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => setProducts(res.data.products));

    const saved = JSON.parse(localStorage.getItem("approvedProducts")) || [];
    setApproved(saved);
  }, []);


  const approveProduct = (p) => {
  let updated = [];
if (approved.length > 0) {
    for (let i = 0; i < approved.length; i++) {
      updated.push(approved[i]);
    }
  }
updated.push(p);
setApproved(updated);

  // storing in localStorage
  localStorage.setItem("approvedProducts", JSON.stringify(updated));
};


  
  return (
    <>
      <Header />

      <div style={{ padding: "20px" }}>
        <h1>Admin Panel</h1>

        <h2>API Products (Approve Products)</h2>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h3>{p.title}</h3>
            <p>₹ {p.price}</p>

            <button
              disabled={approved.some(a => a.id === p.id)}
              onClick={() => approveProduct(p)}
            >
              {approved.some(a => a.id === p.id)
                ? "Approved"
                : "Approve Product"}
            </button>
          </div>
        ))}

        <hr />

        <h2>Approved Products (Visible to Users)</h2>
        {approved.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid green",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h3>{p.title}</h3>
            <p>₹ {p.price}</p>

            <button
              onClick={() => deleteProduct(p.id)}
              style={{ background: "red", color: "white" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Admin;
