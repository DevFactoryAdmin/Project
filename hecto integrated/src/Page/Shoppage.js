import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Subbanner from "../Components/Subbanner";
import Filterhorizontal from "../Components/Filterhorizontal";
import FilterBarVertical from "../Components/FilterBarVertical";
import Gridview from "../Components/Gridview";
import BrandList from "../Components/BrandList";
import Footer from "../Components/Footer";
import Shoppage_listpage from "./Shoppage_listpage";
import "./Shoppage.css";

export default function Shoppage_gridpage() {
  const navigate = useNavigate();
  // const [list,setList]=useState(true);
  const handleListpageClick = () => {
    navigate("/Shoppage_listpage");
    // setList(list ? <Shoppage_listpage/> : <Shoppage_gridpage/>)
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
      <div className="shoppage_gridpage">
        <Header
          handleCartClick={handleCartClick}
          handleLoginClick={handleLoginClick}
          handleHomeClick={handleHomeClick}
          handleShopClick={handleShopClick}
        />
        <Subbanner title={"Shopping"} />
        <div className="shoppage_filterhorizontal">
        <Filterhorizontal
          handleListpageClick={handleListpageClick}
          handleGridpageClick={handleGridpageClick}
        />
        </div>
        <div className="shoppage_gridpage_gridview">
          <div className="shoppage_gridpage_col_fverticalbar">
            <FilterBarVertical />
          </div>
          <div className="shoppage_gridpage_col_listview">
            <Gridview />
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
