import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Subbanner from "../Components/Subbanner";
import Orderlist from "../Components/Orderlist";
import Footer from "../Components/Footer";
import "./Orderlistpage.css";
export default function Orderlistpage() {
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
      <Subbanner label="Order List" title={"Order List"} />
      <div className="componentorderlist">
        <Orderlist />
      </div>
      <Footer
        handleSignupClick={handleSignupClick}
        handleProfilePageClick={handleProfilePageClick}
        handleOrderListClick={handleOrderListClick}
        handleOrderDetailPageClick={handleOrderDetailPageClick}
      />
    </>
  );
}
