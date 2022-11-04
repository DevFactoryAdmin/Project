import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Subbanner from "../Components/Subbanner";
import BrandList from "../Components/BrandList";
import Relatedproducts from "../Components/Relatedproducts";
import Productthumb from "../Components/Productthumb";
import ProductDescription from "../Components/ProductDescription";
import "./Singleproductpage.css";
export default function Singleproductpage() {
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
  return (
    <>
      <Header
        handleCartClick={handleCartClick}
        handleLoginClick={handleLoginClick}
        handleHomeClick={handleHomeClick}
        handleShopClick={handleShopClick}
      />
      <Subbanner title={"Product Details"} />
      <Productthumb />
      <ProductDescription />
      <Relatedproducts />
      <BrandList />
      <Footer
        handleSignupClick={handleSignupClick}
        handleProfilePageClick={handleProfilePageClick}
        handleOrderListClick={handleOrderListClick}
        handleOrderDetailPageClick={handleOrderDetailPageClick}
      />
    </>
  );
}
