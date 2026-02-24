import { Link } from "react-router"

function Content(){
  return(
    <>
        
      <div className="main">
      <marquee> <h1>Welcome to My Shop!</h1></marquee> 

        <p>Discover our amazing products and enjoy shopping.</p>
        <Link to="/product"><button>Start Now</button></Link>



      </div>
      <div className="footer">
        
        <h3>Why Choose us?</h3>
        <h6>💥HIGH QUALITY</h6>
        <h6>💥BEST PRICE</h6>
        <h6>💥FAST DELIVERY</h6>
        <h6>💥24/7 SUPPORT</h6>


      </div>

    </>
  )
}
export default Content