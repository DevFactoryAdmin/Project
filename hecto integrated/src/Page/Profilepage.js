import { useNavigate } from "react-router-dom";
import "./Profilepage.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Subbanner from "../Components/Subbanner";
import Profileedit from "../Components/Profileedit";
import Profileproduct from "../Components/Profileproduct";
export default function Profilepage() {
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
      <div className="profilepage">
        <Header
          handleCartClick={handleCartClick}
          handleLoginClick={handleLoginClick}
          handleHomeClick={handleHomeClick}
          handleShopClick={handleShopClick}
        />
        <Subbanner title={"My Account"} />
        {/* <div className="profilepage_row"> */}
        <Profileedit />
        {/* </div> */}
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
