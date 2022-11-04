import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Mainbanner from "../Components/Mainbanner";
import Featuredlist from "../Components/Featuredlist";
import LatestProducts from "../Components/LatestProducts";
import InBetweenBanner1 from "../Components/InBetweenBanner1"; 
import InBetweenBanner2 from "../Components/InBetweenBanner2"; 
import Discountitem from "../Components/Discountitem";
import Topcategories from "../Components/Topcategories";
import Latestblog from "../Components/Latestblog";
import BrandList from "../Components/BrandList";
import Offerlist from "../Components/Offerlist";
import TrendingProducts from "../Components/TrendingProducts";
export default function HomePage() {
  return (
    <>
      <Header />
      <Mainbanner />
      <Featuredlist />
      <LatestProducts />
      <Offerlist />
      <InBetweenBanner1 />
      <TrendingProducts />
      <Discountitem />
      <Topcategories />
      <InBetweenBanner2 />
      <BrandList />
      <Latestblog />
      <Footer/>
    </>
  );
}
