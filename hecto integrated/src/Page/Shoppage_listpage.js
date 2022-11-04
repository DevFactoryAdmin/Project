import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Subbanner from "../Components/Subbanner";
import Filterhorizontal from "../Components/Filterhorizontal";
import FilterBarVertical from "../Components/FilterBarVertical";
import Listview from "../Components/Listview";
import BrandList from "../Components/BrandList";
import Footer from "../Components/Footer";
import "./Shoppage_listpage.css";

export default function Shoppage_listpage() {
  const navigate = useNavigate();
  const handleListpageClick = () => {
    navigate("/Shoppage_listpage");
  };
  const handleGridpageClick = () => {
    navigate("/Shoppage");
  };
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
  return (
    <>
      <div className="shoppage_listpage">
        <Header
          handleCartClick={handleCartClick}
          handleLoginClick={handleLoginClick}
          handleHomeClick={handleHomeClick}
          handleShopClick={handleShopClick}
        />
        <Subbanner title={"Shop"} />
        <Filterhorizontal
          handleListpageClick={handleListpageClick}
          handleGridpageClick={handleGridpageClick}
        />
        <div className="shoppage_listpage_col">
          <div className="shoppage_listpage_col_fverticalbar">
            <FilterBarVertical />
          </div>
          <div className="shoppage_listpage_col_listview">
            <Listview />
          </div>
        </div>
        <BrandList />
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
