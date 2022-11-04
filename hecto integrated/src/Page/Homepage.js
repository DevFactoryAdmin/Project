import Header from "../Components/Header";
import Mainbanner from "../Components/Mainbanner";
import Featuredlist from "../Components/Featuredlist";
import LatestProducts from "../Components/LatestProducts";
import Offerlist from "../Components/Offerlist";
import InBetweenBanner1 from "../Components/InBetweenBanner1";
import TrendingProducts from "../Components/TrendingProducts";
import Discountitem from "../Components/Discountitem";
import Topcategories from "../Components/Topcategories";
import InBetweenBanner2 from "../Components/InBetweenBanner2";
import Latestblog from "../Components/Latestblog";
import Footer from "../Components/Footer";
import "./Homepage.css";
import BrandList from "../Components/BrandList";
import { useNavigate } from "react-router-dom";
export default function Homepage() {
  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate("/CartPage");
  };
  const handleLoginClick = () => {
    navigate("/Loginpage");
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
  const handleViewDetailsClick = () => {
    navigate("/Singleproductpage");
  };
  const handleShoppageClick = () => {
    navigate("/Shoppage");
  };

  return (
    <>
      <Header
        handleCartClick={handleCartClick}
        handleLoginClick={handleLoginClick}
        handleShopClick={handleShopClick}
      /> 
      <Mainbanner handleShoppageClick={handleShoppageClick} />
      <div className="componentfeaturedlist">
        <Featuredlist handleViewDetailsClick={handleViewDetailsClick} />
      </div>
      <div className="componentlatestproducts">
        <LatestProducts handleViewDetailsClick={handleViewDetailsClick}/>
      </div>
      <div className="componentofferlist">
        <Offerlist />
      </div>
      <div className="componentinbetweenbanner1">
        <InBetweenBanner1 />
      </div>
      <div className="componenttrendingproducts">
        <TrendingProducts handleShoppageClick={handleShoppageClick} />
        <Discountitem handleShoppageClick={handleShoppageClick} />
        <Topcategories 
        handleShoppageClick={handleShoppageClick} 
        handleViewDetailsClick={handleViewDetailsClick}
        />
      </div>
      <div className="componentinbetweenbanner2">
        <InBetweenBanner2 handleShoppageClick={handleShoppageClick}/>
      </div>
      <BrandList />
      <Latestblog />
      <Footer
        handleSignupClick={handleSignupClick}
        handleProfilePageClick={handleProfilePageClick}
        handleOrderListClick={handleOrderListClick}
        handleOrderDetailPageClick={handleOrderDetailPageClick}
      />
    </>
  );
}
