import { useNavigate } from "react-router-dom";
// import mobile from "../images/images.jpeg"
import Footer from "./Footer";
import Header from "./Header";
function Product(){
         const navigate=useNavigate();
         const handleAddToCart=()=>{
            const isloggedin=localStorage.getItem("isLoggedin");

            if(isloggedin=="true"){
                navigate("/cart");
            }
            else{
                alert("Please Login first");
                navigate("/login");
            }
         }

    return(
        <>
        <Header/>
        <div className="products">
            <div className="product">
                <img src={mobile} alt="Project 1"/>
                <h3>I-Phone</h3>
                <p>RS.80,000</p>
                <button onClick={handleAddToCart}>Add to cart</button>
            </div>
            <div className="product">
                <img src={mobile} alt="Project 1"/>
                <h3>I-Phone 2</h3>
                <p>RS.1,00,000</p>
                 <button onClick={handleAddToCart}>Add to cart</button>
            </div>
            <div className="product">
                <img src={mobile} alt="Project 1"/>
                <h3>I-Phone 3</h3>
                <p>RS.90,000</p>
                 <button onClick={handleAddToCart}>Add to cart</button>
            </div>
        <Footer/>


        </div>
        </>
    )
}
export default Product;