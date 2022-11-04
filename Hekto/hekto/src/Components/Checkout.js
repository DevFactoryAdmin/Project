import bag1 from "./Images/checkout_bag1.png";
import bag2 from "./Images/checkout_bag2.png";
import bag3 from "./Images/checkout_bag3.png";
import bag4 from "./Images/checkout_bag4.png";
import bag5 from "./Images/checkout_bag5.png";
import "./Checkout.css"
export default function Checkout() {
    return (
        <>
            <div className="checkout">
                <div className="checkout_right">
                    <div className="checkout_right_header">
                        <div className="checkout_right_header_h1">
                            <label>Product</label>
                        </div>
                        <div className="checkout_right_header_h2">
                            <label>Price</label>
                        </div>
                        <div className="checkout_right_header_h3">
                            <label>Quantity</label>
                        </div>
                        <div className="checkout_right_header_h4">
                            <label>Total</label>
                        </div>
                    </div>
                    <div className="checkout_right_cont" >
                        {/* <Checkout_cont header={"product","Price","Quantity","Total"}></Checkout_cont> */}
                        <Checkout_cont image={bag1} label={"Ut diam consequat"}></Checkout_cont>
                        <Checkout_cont image={bag2} label={"Vel faucibus posuere"}></Checkout_cont>
                        <Checkout_cont image={bag3} label={"Ac vitae vestibulum"}></Checkout_cont>
                        <Checkout_cont image={bag4} label={"Elit massa diam"}></Checkout_cont>
                        <Checkout_cont image={bag5} label={"Proin pharetra elementum"}></Checkout_cont>
                        <div className="checkout_right_cont_button">
                            <div className="checkout_right_cont_button_btn1">
                                <button >Update Cart</button>
                            </div>
                            <div className="checkout_right_cont_button_btn2">
                                <button >Clear Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout_left">
                    <div className="checkout_left_total">
                        <div className="checkout_left_total_header">
                            <label>Cart Totals</label>
                        </div>
                        <div className="checkout_left_total_body">
                            <div className="checkout_left_total_body_row1">
                                <div className="checkout_left_total_body_row1_l1">
                                    <label>Subtotals</label>
                                </div>
                                <div className="checkout_left_total_body_row1_l2">
                                    <label>£219.00</label>
                                </div>

                            </div>
                            <div className="checkout_left_total_body_row2">
                                <div className="checkout_left_total_body_row2_l1">
                                    <label>Totals</label>
                                </div>
                                <div className="checkout_left_total_body_row2_l2">
                                    <label >£325.00</label>
                                </div>
                            </div>
                            <div className="checkout_left_total_body_row3">
                                <input type="checkbox"></input>
                                <label>Shipping & taxes calculated at checkout</label>
                            </div>
                            <div className="checkout_left_total_body_button">
                                <button type="button" class="block">Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
                    <div className="checkout_left_calculate">
                        <div className="checkout_left_calculate_header">
                            <label>Calculate Shopping</label>
                        </div>
                        <div className="checkout_left_calculate_body">
                            <div className="checkout_left_calculate_body_l1">
                                <label>Bangladesh</label>
                            </div>
                            <div className="checkout_left_calculate_body_l2">
                                <label>Mirpur Dhaka - 1200</label>
                            </div>
                            <div className="checkout_left_calculate_body_l3">
                                <label>Postal Code</label>
                            </div>
                            <button>Calculate Shopping</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
function Checkout_cont({ image, label }) {
    return (
        <>
            <div className="Checkout_cont">
                <div className="checkout_cont_product">
                    {/* <div className="checkout_cont_product_header">
                <label>{header}</label>
            </div> */}
                    <img src={image}></img>
                    <div className="checkout_cont_product_label">
                        <label className="checkout_cont_product_label_l1">{label}</label>
                        <label className="checkout_cont_product_label_l2">Color:Brown</label>
                        <label className="checkout_cont_product_label_l3">Size:XL</label>
                    </div>
                </div>
                <div className="checkout_cont_price">
                    <label>$32.00</label>
                </div>
                <div className="checkout_cont_quantity">
                    <button>1</button>
                </div>
                <div className="checkout_cont_total">
                    <label>£219.00</label>
                </div>
            </div>
        </>
    )
}