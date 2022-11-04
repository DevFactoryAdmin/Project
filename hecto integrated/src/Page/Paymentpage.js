import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Subbanner from "../Components/Subbanner";
import Payment from "../Components/Payment";
import "./Paymentpage.css";

export default function Paymentpage() {
  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate("/CartPage");
  };
  const handleLoginClick = () => {
    navigate("/Loginpage");
  };
  const handleHomeClick = () => {
    navigate("/");
  };
  const handleShopClick = () => {
    navigate("/Shoppage");
  };
  const handleSignupClick = () => {
    navigate("/Loginpage");
  };
  const handleProfilePageClick = () => {
    navigate("/Profilepage");
  };
  const handleOrderListClick = () => {
    navigate("/Orderlistpage");
  };
  const handleOrderDetailPageClick = () => {
    navigate("/Orderdetailpage");
  };
  const handleordercompletedpageClick=()=>{
    navigate('/Ordercompletedpage')
  }
  return (
    <>
      <div className="Payments">
        <Header
          handleCartClick={handleCartClick}
          handleLoginClick={handleLoginClick}
          handleHomeClick={handleHomeClick}
          handleShopClick={handleShopClick}
        />
        <Subbanner title={"Payment"}/>
        <div className="payments_component">
          <Payment
            handleordercompletedpageClick={handleordercompletedpageClick}
          />
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
