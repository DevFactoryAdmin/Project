import "./Header.css";
import { BsFillBagCheckFill, BsFillCupFill } from "react-icons/bs";
import Header_phone from "./Images/Header_phone.png";
import Header_envelope from "./Images/Header_envelope.png";
import Header_user from "./Images/Header_user.png";
import Header_heart from "./Images/Header_heart.png";
import Header_cart from "./Images/Header_cart.png";
import Header_searchlens from "./Images/Header_searchlens.png";
// import header_cartmob from "./Images/header_cartmob.png";
import header_menumob from "./Images/header_menumob.png";
import { useState } from "react";
// import header_usermob from "./Images/header_usermob.png";
// import header_wishlistmob from "./Images/header_wishlistmob.png";
export default function Header({
  handleCartClick,
  handleLoginClick,
  handleHomeClick,
  handleShopClick,
}) {
  const [style, setStyle] = useState("headermenu");
  const handleMenuClick = () => {
    setStyle("Header_r2_col2_outer");
  };
  return (
    <div className="Header">
      <div className="Header_r1">
        <div className="Header_r1_left ">
          <div className="Header_r1_left_mailid">
            <div className="Header_r1_left_mailid_img">
              <img src={Header_envelope} />
            </div>

            <div className="Header_r1_left_mailid_mail">
              <label>mhhasanul@gmail.com</label>
            </div>
          </div>
          <div className="Header_r1_left_contact">
            <div className="Header_r1_left_contact_img">
              <img src={Header_phone} />
            </div>
            <div className="Header_r1_left_contact_number">
              <label> (12345)67890</label>
            </div>
          </div>
        </div>

        <div className="Header_r1_right">
          <div className="Header_r1_right_1">
            <select>
              <option> English</option>
              <option> Hindi</option>
              <option> Tamil</option>
            </select>
          </div>

          <div className="Header_r1_right_2">
            <select>
              <option> INR</option>
              <option> AUD</option>
              <option> USD</option>
            </select>
          </div>
          <div className="Header_r1_right_3">
            <div className="Header_r1_right_login">
              <button onClick={(e) => handleLoginClick()}> Log In</button>
            </div>

            <div className="Header_r1_right_3_img">
              <img src={Header_user} />
            </div>
          </div>
          <div className="Header_r1_right_4">
            <div className="Header_r1_right_4_wishlist">
              <label> Wishlist</label>
            </div>
            <div className="Header_r1_right_4_img">
              <img src={Header_heart} />
            </div>
          </div>
          <div className="Header_r1_right_5">
            <img onClick={(e) => handleCartClick()} src={Header_cart} />
          </div>
        </div>
      </div>
      <div className="Header_r2">
        <div className="Header_r2_col1">
          <img
            src={header_menumob}
            className="header_mobview1"
            onClick={(e) => handleMenuClick()}
          />
          <label> Logo</label>
          <div className="header_mobview">
            <img src={Header_user} className="header_mobview" onClick={(e) => handleLoginClick()}/>
            <img src={Header_heart} className="header_mobview" />
            <img src={Header_cart} className="header_mobview" onClick={(e) => handleCartClick()}/>
          </div>
        </div>
        <ul className="Header_r2_col2">
          <li onClick={(e) => handleHomeClick()}>Home</li>
          <li>Pages</li>
          <li>Products</li>
          <li>Blog</li>
          <li onClick={(e) => handleShopClick()}>Shop</li>
          <li>Contact</li>
        </ul>
        <div className="Header_r2_col3">
          <input type="text" />
          <div>
            <img src={Header_searchlens} />
          </div>
        </div>
      </div>
      <Menubar />
    </div>
  );
}
function Menubar() {
  const mobile = [
    {
      title: "mobile_one",
      cat1: ["cat1_one", "cat1_two"],
      cat2: ["cat2_one", "cat2_two"],
      cat3: ["cat3_one", "cat3_two"],
    },
  ];
  const laptops = [
    {
      title: "mobile_one",
      cat1: ["cat1_one", "cat1_two"],
      cat2: ["cat2_one", "cat2_two"],
      cat3: ["cat3_one", "cat3_two"],
    },
  ];
  const electronics = [
    {
      title: "mobile_one",
      cat1: ["cat1_one", "cat1_two"],
      cat2: ["cat2_one", "cat2_two"],
      cat3: ["cat3_one", "cat3_two"],
    },
  ];
  return (
    <>
      <div className="menubar">
        <ul className="menubar_ul">
          <li className="menubar_li">
            <label className="menubar_title">Mobile</label>
            <Popup data={mobile} />
          </li>
          <li className="menubar_li">
            <label className="menubar_title">Laptops</label>
            <Popup data={laptops} />
          </li>
          <li className="menubar_li">
            <label className="menubar_title">Electronics</label>
            <Popup data={electronics} />
          </li>
          <li className="menubar_li">
            <label className="menubar_title">TV</label>
            <Popup data={mobile} />
          </li>
          <li className="menubar_li">
            <label className="menubar_title">Mobile</label>
            <Popup data={mobile} />
          </li>
          <li className="menubar_li">
            <label className="menubar_title">Mobile</label>
            <Popup data={mobile} />
          </li>
        </ul>
      </div>
    </>
  );
}

function Popup({ data }) {
  const [right, setRight] = useState({
    title: "mobile_one",
    cat1: ["cat1_one", "cat1_two"],
    cat2: ["cat2_one", "cat2_two"],
    cat3: ["cat3_one", "cat3_two"],
  });
  return (
    <>
      <div className="menubar_popup">
        <div className="menubar_popup_left">
          <ul>
            {data.map((itm, indx) => {
              return (
                <li>
                  <BsFillBagCheckFill className="menubar_popup_icon" />
                  {itm.title}
                </li>
              );
            })}

            {/* <li><BsFillBagCheckFill className="menubar_popup_icon"/>One</li>
            <li><BsFillBagCheckFill className="menubar_popup_icon"/>Two</li>
            <li><BsFillBagCheckFill className="menubar_popup_icon"/>Three</li>
            <li><BsFillBagCheckFill className="menubar_popup_icon"/>Four</li> */}
          </ul>
        </div>
        <div className="menubar_popup_right">
          <div className="menubar_popup_right_one">
            <h3>Shop By Category One</h3>
            <ul>
              {right.cat1.map((itm, indx) => {
                return (
                  <li>
                    <BsFillCupFill className="menubar_popup_icon" />
                    {itm}
                  </li>
                );
              })}
              {/* <li>
                <BsFillCupFill className="menubar_popup_icon" />
                FillOne
              </li>
              <li>
                <BsFillCupFill className="menubar_popup_icon" />
                Two
              </li>
              <li>
                <BsFillCupFill className="menubar_popup_icon" />
                Three
              </li>
              <li>
                <BsFillCupFill className="menubar_popup_icon" />
                Four
              </li> */}
            </ul>
          </div>
          <div className="menubar_popup_right_one">
            <h3>Shop By Category One</h3>
            <ul>
              {right.cat2.map((itm, indx) => {
                return (
                  <li>
                    <BsFillCupFill className="menubar_popup_icon" />
                    {itm}
                  </li>
                );
              })}
              {/* <li>
                <BsFillCupFill className="menubar_popup_icon" />
                One
              </li>
              <li>
                <BsFillCupFill className="menubar_popup_icon" />
                Two
              </li>
              <li>
                <BsFillCupFill className="menubar_popup_icon" />
                Three
              </li>
              <li>
                <BsFillCupFill className="menubar_popup_icon" />
                Four
              </li> */}
            </ul>
          </div>
          <div className="menubar_popup_right_one">
            <h3>Shop By Category One</h3>
            <ul>
              {right.cat3.map((itm, indx) => {
                return (
                  <li>
                    <BsFillCupFill className="menubar_popup_icon" />
                    {itm}
                  </li>
                );
              })}
              {/* <li>
                <BsFillCupFill className="menubar_popup_icon" />
                One
              </li>
              <li>
                <BsFillCupFill className="menubar_popup_icon" />
                Two
              </li>
              <li>
                <BsFillCupFill className="menubar_popup_icon" />
                Three
              </li>
              <li>
                <BsFillCupFill className="menubar_popup_icon" />
                Four
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
