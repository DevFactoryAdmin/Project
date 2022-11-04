import image from "./Images/adminstatisticsgraph_img.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./Adminstatisticsgraph.css";
export default function Adminstatisticsgraph() {
    return (
        <>
            <div className="adminstatisticsgraph">
                <div className="adminstatisticsgraph_header">
                    <div className="adminstatisticsgraph_header_label">
                       <label>Average Check</label>
                    </div>
                    <div className="adminstatisticsgraph_header_icon">
                       <BsThreeDotsVertical/>
                    </div>
                </div>
                <div className="adminstatisticsgraph_row2">
                    <label>$ 5560.00</label>
                </div>
                <div className="adminstatisticsgraph_row3">
                    <img src={image}></img>
                    <label>+5%</label>
                </div>

            </div>
        </>
    )
}