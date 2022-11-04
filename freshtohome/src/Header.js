import React from "react";

import logo from "./images/logo-medium.png";
import { MdLocationOn, MdOutlineSearch } from "react-icons/md";
import {
  AiOutlineCaretDown,
  AiFillPhone,
  AiOutlineDown,
  AiOutlineRight,
  AiTwotoneMail,
} from "react-icons/ai";
import {
  FaUser,
  FaShoppingCart,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function Header() {

  const navigate=useNavigate();
  const openCart=(e)=>{
    e.preventDefault()
    navigate('/cart')
  }
  const navigateToHome=(e)=>{
    e.preventDefault()
    navigate('/')
  }

  return (
    <>
      <div className="header">
        <div className="header_row1">
          <div className="header_row1_left">
            <AiFillPhone />
            <label>1800-313-3302</label>
            <label>|</label>
            <AiTwotoneMail />
            <label>customercare@freshtohome.com</label>
          </div>
          <div className="header_row1_right">
            <label>Certificates</label>
            <label>|</label>
            <label>Why us</label>
            <label>|</label>
            <label>Newsroom</label>
            <label>|</label>
            <label>Sell-With-Us</label>
            <label></label>
            <MdLocationOn />
            <label>Banglore / Karnataka</label>
            <AiOutlineDown />
          </div>
        </div>
        <div className="header_row2">
          <img src={logo} onClick={(e)=>navigateToHome(e)}/>
          <div className="header_row2_search">
            <input type="text" />
            <MdOutlineSearch />
          </div>
          <div className="header_row2_right">
            <div className="header_row2_right_icons">
              <FaUser className="header_row2_right_singleicon" />
            </div>
            <div onClick={(e)=>openCart(e)} className="header_row2_right_icons">
              <div className="cartcount">10</div>
              <FaShoppingCart className="header_row2_right_singleicon" />
            </div>
          </div>
        </div>
      </div>
      <div className="header_row3">
        <ul>
          <li>
            <FaShoppingCart />
            Fish {"&"} SeaFood
          </li>
          <li>
            <FaShoppingCart />
            Poultry
          </li>
          <li>
            <FaShoppingCart />
            Mutton
          </li>
          <li>
            <FaShoppingCart />
            Steaks {"&"} Fillet
          </li>
          <li>
            <FaShoppingCart />
            Ready To Cook
          </li>
          <li>
            <FaShoppingCart />
            Vegetarian
          </li>
        </ul>
      </div>
    </>
  );
} 
