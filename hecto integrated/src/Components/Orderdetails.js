import React from "react";
import { useState } from "react";
import watch from "./Images/orderdetails_watch.png";
import icon1 from "./Images/orderdetails_icon1.png";
import icon2 from "./Images/orderdetails_icon2.png";
import icon3 from "./Images/orderdetails_icon3.png";
import icon4 from "./Images/orderdetails_icon4.png";
import "./Orderdetails.css";
export default function Orderdetails() {
  return (
    <>
      <div className="orderdetails">
        <div className="orderdetails_row1">
          <div className="orderdetails_row1_col1">
            <img src={watch} />
          </div>
          <div className="orderdetails_row1_col2">
            <h4>Dictum morbi</h4>
            <span>$26.00</span>
            <label>
              Order Placed On <span className="orderlist_space_1"></span> :
              2022-6-21
            </label>
            <label>
              Order ID <span className="orderlist_space_2"></span> : #4545695
            </label>
            <label>
              Expected Delivery <span className="orderlist_space_3"></span>:
              2022-6-30
            </label>
          </div>
        </div>
        <div className="orderdetails_row2">
          <Singleorderdetails image={icon1}/>
          <div className="orderdetails_row2_div"></div>
          <Singleorderdetails image={icon2}/>
          <div className="orderdetails_row2_div"></div>
          <Singleorderdetails image={icon3}/>
          <div className="orderdetails_row2_div"></div>
          <Singleorderdetails image={icon4}/>
        </div>
        <div className="orderdetails_row3">
          <button>Cancel Order </button>
        </div>
      </div>
    </>
  );
}

function Singleorderdetails({image}) {
  const [cartstyle, setCartStyle] = useState("");
  // const [dispatchstyle,SetDispatchStyle]=useState("");
  // const [outdeliveryStyle,setOutDeliveryStyle]=useState("");
  // const [deliveryStyle,setDeliveryStyle]=useState("");
  return (
    <>
      <div className="singleorderdetails">
        <div className="singleorderdetails_row1">
          <div className={cartstyle}>
            <div className="singleorderdetails_row1_circle">
              <img src={image} width={40} />
            </div>
          </div>
        </div>
        <div className="singleorderdetails_row2">
          <h4>Order Placed</h4>
          <label>June 6, 2022 | 03.45 pm</label>
        </div>
      </div>
    </>
  );
}
