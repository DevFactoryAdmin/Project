import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Product() {
  return (
    <>
      <Header />
      <div className="productdiv">
        <div className="productdiv_col1">
          <img src={require("./images/itemimage.jpg")} />
        </div>
        <div className="productdiv_col3">
          <h3>Protein Pack (Chicken) - Mini</h3>
          <h5>₹225.00 /pack ₹149.00 /pack</h5>
          <div className="productdiv_col3_row3">
            <div className="productdiv_col3_row3_counter">
              <button>-</button>
              <input type={"text"} />
              <button>+</button>
            </div>
            Pack
            <button>Add to Cart</button>
          </div>
          <label>
            {"("}Total Price: 447.00{")"}
          </label>
          <ul>
            <li>* 1 piece of Premium Chicken Breast Boneless</li>
            <li>* 1 piece of Premium Chicken Thigh Boneless</li>
            <li>* 1 piece of Premium Chicken Drumstick</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
