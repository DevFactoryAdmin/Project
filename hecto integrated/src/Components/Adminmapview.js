import { BiDotsVerticalRounded } from "react-icons/bi";
import image from "./Images/adminmapview_img.png";
import "./Adminmapview.css";
export default function Adminmapview(){
    return(
        <>
          <div className="adminmapview">
            <div className="adminmapview_header">
                <div className="adminmapview_header_label">
                    <label>Distribution of Sales Geographically</label>
                </div>
                <div className="adminmapview_header_icon">
                    < BiDotsVerticalRounded style={{fontSize:25}}/>
                </div>
            </div>
            <div className="adminmapview_map">
                <img src={image}></img>
            </div>
          </div>
        </>
    )
}