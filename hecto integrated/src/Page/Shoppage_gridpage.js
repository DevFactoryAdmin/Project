import React from "react";
import Header from "../Components/Header";
import Subbanner from "../Components/Subbanner";
import Filterhorizontal from "../Components/Filterhorizontal";
import Gridview from "../Components/Gridview";
import BrandList from "../Components/BrandList";
import Footer from "../Components/Footer";
import "./Shoppage.css";

export default function Shoppage_gridpage() {
  return (
    <>
      <div className="shoppage_gridpage">
        <Header />
        <Subbanner />
        <Filterhorizontal />
        <div className="shoppage_gridpage_gridview">
          <Gridview />
        </div>
        <BrandList />
        <Footer />
      </div>
    </>
  );
}
