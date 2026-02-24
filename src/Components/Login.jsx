import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Login() {
  const [role, setRole] = useState("");  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 
  useEffect(() => {
    const existingUsers = localStorage.getItem("users");

    if (!existingUsers) {
      localStorage.setItem(
        "users",
        JSON.stringify([{ username: "sonsy", password: "12345" }])
      );
    }
  }, []);

  const handleLogin = () => {
    if (role === "") {
      alert("Please select User or Admin");
      return;
    }

    if (role === "admin") {
      if (username === "sonsy" && password === "123") {
        localStorage.setItem("role", "admin");
        localStorage.setItem("isLoggedIn", "true");
        navigate("/admin");
      } else {
        alert("Invalid admin credentials");
      }
      return;
    }

   
    if (role === "user") {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const validUser = users.find(
        (u) => u.username === username && u.password === password
      );

      if (validUser) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);
        localStorage.setItem("role", "user");
        navigate("/product1");
      } else {
        alert("Invalid user credentials");
      }
    }
  };

  return (
    <>
      <Header />

      <div style={{ textAlign: "center", padding: "120px" }}>
        <h2>Login</h2>

        <select
          onChange={(e) => setRole(e.target.value)}
          style={{ padding: "10px", marginBottom: "15px" }}
        >
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <br /><br />

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /><br />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button onClick={handleLogin}>Login</button>
      </div>

      <Footer />
    </>
  );
}

export default Login;
