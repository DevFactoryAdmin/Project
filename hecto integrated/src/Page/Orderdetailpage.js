import React from "react";
import { useNavigate } from "react-router-dom";
import "./Orderdetailpage.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Subbanner from "../Components/Subbanner";
import Orderdetails from "../Components/Orderdetails";
import Rating from "../Components/Rating";

export default function Orderdetailpage() {
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
    navigate('/Orderlistpage')
  }
  const handleOrderDetailPageClick=()=>{
  navigate('/Orderdetailpage')
}
  return (
    <>
      <div className="orderdetailpage">
        <Header
          handleCartClick={handleCartClick}
          handleLoginClick={handleLoginClick}
          handleHomeClick={handleHomeClick}
          handleShopClick={handleShopClick}
        />
        <Subbanner title={"My Orders"}/>
        <div className="orderdetailpage_col">
          <div className="orderdetailpage_col_col1">
            <Orderdetails />
          </div>
          <div className="orderdetailpage_col_col2">
            <Rating />
          </div>
        </div>
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
