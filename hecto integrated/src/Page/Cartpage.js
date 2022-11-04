import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Checkout from "../Components/Checkout";
import Subbanner from "../Components/Subbanner";
import "./Cartpage.css";
export default function Cartpage() {
    const navigate=useNavigate();
  const handleShippingdetailsClick=()=>{
    navigate('/Shippingpage')
  }
  const handleLoginClick=()=>{
    navigate('/Loginpage')
  }
  const handleHomeClick=()=>{
    navigate('/')
  }
  const handleShopClick=()=>{
    navigate('/Shoppage')
  }
  const handleSignupClick=()=>{
    navigate('/Loginpage')
  }
  const handleProfilePageClick=()=>{
    navigate('/Profilepage')
  }
  const handleOrderListClick=()=>{
    navigate('/Orderlistpage')
  }
  const handleOrderDetailPageClick=()=>{
  navigate('/Orderdetailpage')
}
    return (
        <>
            <div className="componentheader">
                <Header 
                handleLoginClick={handleLoginClick}
                handleHomeClick={handleHomeClick}
                handleShopClick={handleShopClick}
                />
            </div>
            <div className="componentsubbanner">
                <Subbanner title={"Shopping Cart"} />
            </div>

            <div className="componentcheckout">
                <Checkout 
                handleShippingdetailsClick={handleShippingdetailsClick}/>
            </div>
            <Footer 
            handleSignupClick={handleSignupClick}
            handleProfilePageClick={handleProfilePageClick}
            handleOrderListClick={handleOrderListClick}
            handleOrderDetailPageClick={handleOrderDetailPageClick}/>
        </>
    )
}