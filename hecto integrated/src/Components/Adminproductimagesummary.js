import { BsThreeDotsVertical } from "react-icons/bs";
import image2 from "./Images/adminproductimagesummary_increment.png";
import image1 from "./Images/adminproductimagesummary_airpods.png";
import "./Adminproductimagesummary.css";
export default function Adminproductimagesummary(){
    return(
        <>
          <div className="adminproductimagesummary">
            <div className="adminproductimagesummary_header">
                <div className="adminproductimagesummary_header_left">
                    <label>Best Selling Product</label>
                </div>
                <div className="adminproductimagesummary_header_right">
                    <BsThreeDotsVertical />
                </div>
            </div>
            <div className="adminproductimagesummary_body">
                <div className="adminproductimagesummary_body_img">
                    <img src={image1}></img>
                </div>
                <div className="adminproductimagesummary_body_details">
                    <div className="adminproductimagesummary_body_details_col1">
                        <label className="adminproductimagesummary_body_details_col1_dollar">$</label>
                        <label className="adminproductimagesummary_body_details_col1_digit">12.545</label>
                    </div>
                    <div className="adminproductimagesummary_body_details_col2">
                        <img src={image2}></img>
                        <label className="adminproductimagesummary_body_details_col2_digit">3.54%</label>
                    </div>

                </div>
            </div>
          </div>
        </>
    )
}