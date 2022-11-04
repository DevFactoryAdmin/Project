import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import OrderCompleted from "../Components/OrderCompleted";
import Subbanner from "../Components/Subbanner";
import "./Ordercompletedpage.css";
export default function Ordercompletedpage() {
  const navigate = useNavigate();
  const handleShopClick = () => {
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
      <Subbanner label="Order Completed" title={"Order Completed"} />
      <OrderCompleted handleShopClick={handleShopClick} />
      <Footer
        handleSignupClick={handleSignupClick}
        handleProfilePageClick={handleProfilePageClick}
        handleOrderListClick={handleOrderListClick}
        handleOrderDetailPageClick={handleOrderDetailPageClick}
      />
    </>
  );
}
