import "./Shippingaddress.css";
export default function Shippingaddress() {
    return (
        <>
            <div className="shippingaddress">
                <div className="shippingaddress_header">
                    <label>Shipping Address</label>
                </div>
                <div className="shippingaddress_body">
                    <div className="shippingaddress_body_name">
                        <div className="shippingaddress_body_name_first">
                            <label>First name (optional)</label>
                        </div>
                        <div className="shippingaddress_body_name_last">
                            <label>Last name</label>
                        </div>
                    </div>
                    <div className="shippingaddress_body_address">
                        <label>Address</label>
                    </div>
                    <div className="shippingaddress_body_apartment">
                        <label>Appaetnentment,suit,e.t.c (optinal)</label>
                    </div>
                    <div className="shippingaddress_body_city">
                        <label>City</label>
                    </div>
                    <div className="shippingaddress_body_place">
                        <div className="shippingaddress_body_place_country">
                            <label>Bangladesh</label>
                        </div>
                        <div className="shippingaddress_body_place_postalcode">
                            <label>Postal Code</label>
                        </div>
                    </div>
                </div>
                <div className="shippingaddress_button">
                    <button>Place Order</button>
                </div>
            </div>
        </>
    )
}