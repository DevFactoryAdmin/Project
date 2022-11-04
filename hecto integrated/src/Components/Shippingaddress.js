import "./Shippingaddress.css";
export default function Shippingaddress({handlePaymentpageClick}) {
    return (
        <>
            <div className="shippingaddress">
                <div className="shippingaddress_header">
                    <label>Shipping Address</label>
                </div>
                <div className="shippingaddress_body">
                    <div className="shippingaddress_body_name">
                        <div className="shippingaddress_body_name_first">
                            <input placeholder="First name (optional)"></input>
                        </div>
                        <div className="shippingaddress_body_name_last">
                            <input placeholder="Last name"></input>
                        </div>
                    </div>
                    <div className="shippingaddress_body_address">
                        <input placeholder="Address"></input>
                    </div>
                    <div className="shippingaddress_body_apartment">
                        <input placeholder="Appaetnentment,suit,e.t.c (optinal)"></input>
                    </div>
                    <div className="shippingaddress_body_city">
                        <input placeholder="City"></input>
                    </div>
                    <div className="shippingaddress_body_place">
                        <div className="shippingaddress_body_place_country">
                            <input placeholder="Bangladesh"></input>
                        </div>
                        <div className="shippingaddress_body_place_postalcode">
                            <input placeholder="Postal Code"></input>
                        </div>
                    </div>
                </div>
                <div className="shippingaddress_button">
                    <button onClick={e=>handlePaymentpageClick()}>Place Order</button>
                </div>
            </div>
        </>
    )
}