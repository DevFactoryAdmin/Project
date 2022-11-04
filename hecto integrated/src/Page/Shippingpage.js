import React from "react";
import { useNavigate } from "react-router-dom";
import "./Shippingpage.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Subbanner from "../Components/Subbanner";
import Shippingaddress from "../Components/Shippingaddress";
import AddressList from "../Components/AddressList";

export default function Shippingpage() {
  const navigate=useNavigate();
  const handleCartClick=()=>{
    navigate('/CartPage')
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
    navigate('/Orderlist')
  }
  const handleOrderDetailPageClick=()=>{
  navigate('/Orderdetailpage')
}
const handlePaymentpageClick=()=>{
  navigate('/Paymentpage')
}
  return (
    <>
      <div className="shippingpage">
        <Header
        handleCartClick={handleCartClick}
        handleLoginClick={handleLoginClick}
        handleHomeClick={handleHomeClick}
        handleShopClick={handleShopClick}
         />
        <Subbanner title={"Shipping"}/>
        <AddressList />
        <Shippingaddress 
        handlePaymentpageClick={handlePaymentpageClick}
        />
        <Footer 
        handleSignupClick={handleSignupClick}
        handleProfilePageClick={handleProfilePageClick}
        handleOrderListClick={handleOrderListClick}
        handleOrderDetailPageClick={handleOrderDetailPageClick}
        />
      </div>
    </>
  );
}
