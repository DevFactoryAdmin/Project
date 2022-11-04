import React from "react";
import { useNavigate } from "react-router-dom";
import "./Loginpage.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Subbanner from "../Components/Subbanner";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

export default function Loginpage() {
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
      <div className="loginpage">
        <Header
          handleCartClick={handleCartClick}
          handleLoginClick={handleLoginClick}
          handleHomeClick={handleHomeClick}
          handleShopClick={handleShopClick}
        />
        <Subbanner title={"My Account"} />
        <div className="loginpage_logsign">
          <div className="loginpage_logsign_login">
            <Login />
          </div>
          <div className="loginpage_logsign_signup">
            <Signup />
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
