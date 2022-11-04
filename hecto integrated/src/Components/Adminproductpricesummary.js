import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./Adminproductpricesummary.css";
export default function Adminproductpricesummary() {
    return (
        <>
            <div className="adminproductpricesummary">
                <div className="adminproductpricesummary_header">
                    <div className="adminproductpricesummary_header_left">
                        <label>Most Profitable Categories</label>
                    </div>
                    <div className="adminproductpricesummary_header_right">
                        < BsThreeDotsVertical style={{ fontSize: "20" }} />
                    </div>
                </div>
                <div className="adminproductpricesummary_cont">
                    <Adminproductpricesummary_list number="1" product="Mobile Phone" arrow={<AiOutlineArrowUp style={{ color: "green", fontSize: "20" }} />} price="$56.23k"></Adminproductpricesummary_list>
                    <Adminproductpricesummary_list number="2" product="Smart Watch" price="$46.20k"></Adminproductpricesummary_list>
                    <Adminproductpricesummary_list number="3" product="Portable Acoustics" price="$32.20k"></Adminproductpricesummary_list>
                    <Adminproductpricesummary_list number="4" product="Smart Speakers" arrow={<AiOutlineArrowDown style={{ color: "red", fontSize: "20" }} />} price="$56.23k"></Adminproductpricesummary_list>
                    <Adminproductpricesummary_list number="5" product="Camcorders" price="$18.56k"></Adminproductpricesummary_list>
                </div>
            </div>
        </>
    );
}
function Adminproductpricesummary_list({ number, product, arrow, price }) {
    return (
        <>
            <div className="adminproductpricesummary_list">
                <div className="adminproductpricesummary_list_no">
                    <label>{number}</label>
                </div>
                <div className="adminproductpricesummary_list_product">
                    <label>{product}</label>
                </div>
                <div className="adminproductpricesummary_list_arrow">
                    <label>{arrow}</label>
                </div>
                <div className="adminproductpricesummary_list_price_border">
                    <div className="adminproductpricesummary_list_price">
                        <label>{price}</label>
                    </div>

                </div>
            </div>
        </>
    );
}