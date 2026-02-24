import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import "./Components/styles.css"

import Product from "./Components/Product"
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import Product1 from "./Components/Product1";
import Admin from "./Components/Admin";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product1" element={<Product1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
         <Route path="/Product" element={<Product/>}/>
         <Route path="/Admin" element={<Admin/>}/>
        </Routes>
      </HashRouter>

    </>
  )
}
export default App
