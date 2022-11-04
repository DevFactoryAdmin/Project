import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { AiFillDelete } from "react-icons/ai";
export default function Cart() {
  return (
    <>
      <Header />
      <div className="cart">
        <h2>Shopping Cart</h2>
        <h6>Free shipping on order above ₹599</h6>
        <table>
          <tr>
            <th colSpan={2}>PRODUCT</th>
            <th>UNIT PRICE</th>
            <th>QTY</th>
            <th>SUBTOTAL</th>
          </tr>
          <tbody>
            <tr>
              <td>
                <img src={require("./images/itemimage.jpg")} />
              </td>
              <td>
                Grey Mullet / Thirutha / ಮಡಲೆ - Curry cut (May include head
                pieces) (400g to 1.3kg)
              </td>
              <td>₹692.00</td>
              <td>
                <div className="productdiv_col3_row3_counter">
                  <button>-</button>
                  <input type={"text"} />
                  <button>+</button>
                </div>
              </td>
              <td>₹1,730.00</td>
              <td>
                <AiFillDelete className="itemdeleteicon"/>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="cart_footer1">
          <div className="cart_footer1_col1">
            <div className="cart_footer1_col1_row">
              <input type={"text"} />
              <button>Apply</button>
            </div>
            <label>* Only one offer/coupon can be applied</label>
          </div>
          <div className="cart_footer1_col2">
            {" "}
            <div className="cart_footer1_col2_buttons">
            <button>Update Cart</button>
            <button>Clear Cart</button>
            <button>Continue Shopping</button></div>
            <table>
              <tr>
                <td>Item subtotal</td>
                <td>₹1,730.00</td>
              </tr>{" "}
              <tr>
                <td>Grand Total</td>
                <td>₹1,730.00</td>
              </tr>{" "}
              <tr>
                <td>Amount to Pay</td>
                <td>₹1,730.00</td>
              </tr>
            </table>
            <div className="cart_footer1_col2_proceed">
              <button>Proceed to Checkout
            </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
