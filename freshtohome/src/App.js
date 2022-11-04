import React, { useEffect, useState } from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactCountryFlag from "react-country-flag";
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
import Header from "./Header";
import Footer from "./Footer";

const SingleItem = () => {
  return (
    <div className="singleitem">
      <img src={require("./images/rtc.png")} />
      <h2>Ready to Cook</h2>
      <label>Samosas, Cutlets, Sausages, Patties, Curries and much more.</label>
      <button>
        ShopNow <AiOutlineRight />
      </button>
    </div>
  );
};

const SingleProduct = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/product");
  };
  return (
    <div
      className="singleproduct"
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <img src={require("./images/itemimage.jpg")} />
      <h6>Protein Pack (Chicken) - Max</h6>
      <label>Samosas, Cutlets, Sausages, Patties, Curries and much more.</label>
    </div>
  );
};
const ModalSample = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
        <div className="modal_inner">
          <img src={logo} />
          <h5>Choose delivery location</h5>
          <input type="text" />
          <label>Awesome! We deliver in your city</label>
          <button>CONTINUE</button>
          <div className="modal_innar_country">
            <ReactCountryFlag countryCode="IN" svg />
            <label>INDIA</label>
            <AiOutlineCaretDown />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}; 

export default function App() {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const handleClose = () => {
    console.log("here");
    setShow(false);
  };
  const handleShow = () => {
    setShow(false);
  };

  useEffect(() => {
    handleShow();
  }, []);

  return (
    <>
      {" "}
      <ModalSample show={show} handleClose={handleClose} />
      <div className="outer">
        <Header />
        <div className="row1">
          <div className="row1_banner"></div>
        </div>
        <div className="row2">
          <ul>
            <li>
              <FaShoppingCart className="row2_icon" />
              <label>
                Become a VIP Member and ENJOY UNLIMITED FREE HOME DELIVERY,
                exclusive deals and more! JOIN NOW
              </label>
            </li>
            <li className="center">
              <FaShoppingCart className="row2_icon" />
              <label>
                Earliest available delivery slot in most areas is Wednesday, 8th
                June. Most areas we have express delivery.
              </label>
            </li>
            <li>
              <FaShoppingCart className="row2_icon" />
              <label>
                Express Delivery is available on our Mobile App. Download now
                for iOS or ANDROID.
              </label>
            </li>
          </ul>
        </div>
        <div className="title">Shop By Category</div>
        <div className="categorywrapper">
          <div className="categoryrow">
            <SingleItem /> <SingleItem /> <SingleItem /> <SingleItem />{" "}
            <SingleItem /> <SingleItem /> <SingleItem />
          </div>
        </div>{" "}
        <div className="title">Deal of the Day</div>
        <div className="categorywrapper">
          <div className="categoryrow">
            <SingleProduct /> <SingleProduct /> <SingleProduct />{" "}
            <SingleProduct />
            <SingleProduct /> <SingleProduct />
            <SingleProduct /> <SingleProduct />
            <SingleProduct /> <SingleProduct />
            <SingleProduct /> <SingleProduct />
            <SingleProduct /> <SingleProduct />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
