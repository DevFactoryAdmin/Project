import React from "react";
import "./Profileproduct.css";
import bag from "./Images/profileproduct_img1.png";
import watch1 from "./Images/profileproduct_img2.png";
import watch2 from "./Images/profileproduct_img3.png";
import top from "./Images/profileproduct_img4.png";
import watch3 from "./Images/profileproduct_img5.png";


export default function Profileproduct() {
  return (
    <>
      <div className="profileproduct">
        <Singleproduct image={bag} />
        <Singleproduct image={watch1} />
        <Singleproduct image={watch2} />
        <Singleproduct image={top} />
        <Singleproduct image={watch3} />
      </div>
    </>
  );
}

function Singleproduct({ image }) {
  return (
    <>
      <div className="singleproduct">
        <div className="singleproduct_product">
          <div>
            <img src={image} />
          </div>
          <div className="singleproduct_product_label">
            <label className="singleproduct_product_label_l1">
              Ut diam consequat
            </label>
            <label className="singleproduct_product_label_l2">
              Color:Brown
            </label>
            <label className="singleproduct_product_label_l3">Size:XL</label>
          </div>
        </div>
        <div className="singleproduct_price">
          <label>$32.00</label>
        </div>
      </div>
    </>
  );
}
