import image from "./Images/adminproductreview_img.png";
import { BsPlusCircleFill } from "react-icons/bs";
import { HiMinusCircle } from "react-icons/hi";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import "./Adminproductreview.css";
export default function Adminproductreview() {
  return (
    <>
      <div className="adminproductreview">
        <div className="adminproductreview_left">
          <div className="adminproductreview_left_name">
            <label>Melvin Barrett</label>
          </div>
          <div className="adminproductreview_left_date">
            <label>January 4,2027</label>
          </div>
          <Left_rating label="Convenience"></Left_rating>
          <Left_rating label="Functionality"></Left_rating>
          <Left_rating label="Design"></Left_rating>
        </div>
        <div className="adminproductreview_right">
          <div className="adminproductreview_right_row1">
            <BsPlusCircleFill style={{ color: "#3F509E", fontSize: "20" }} />
            <label>A worthy continuation of the previous model,corrected most of the shortcomings of past iPhones. Really <br /> works all day with heavy use (youtube,social networks,lightroom,navigation).</label>
          </div>
          <div className="adminproductreview_right_row2">
            <HiMinusCircle style={{ color: "E26824", fontSize: "20" }} />
            <label>The response overview for FaceID has not changed,although it is promised that it doesn't work in horizontal <br /> orientation, as on an iPad. Not delivered usb-c </label>
          </div>
          <div className="adminproductreview_right_row3">
            <BsFillChatLeftTextFill style={{color:"#E5E0FC",fontSize:"20"}} />
            <label>Although they did not make all the possible innovations, for example:less bangs,usb-c,reverse charging,<br />
              higher camera sensor resolution, 5g, etc. but the update is good. </label>
          </div>
          <div className="adminproductreview_right_row4">
            <div className="adminproductreview_right_row4_left">
              <div className="adminproductreview_right_row4_left_label">
                <label>Reply</label>
              </div>
              <div className="adminproductreview_right_row4_left_like">
                < AiFillLike style={{color:"#E5E0FC",fontSize:"20"}} />
                <label>55</label>
              </div>
            </div>
            <div className="adminproductreview_right_row4_right">
              <label>Delete Review</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
function Left_rating({ label }) {
  return (
    <>
      <div className="left_rating">
        <div className="left_rating_label">
          <label>{label}</label>
        </div>
        <div className="left_rating_star">
          <img src={image} ></img>
        </div>
      </div>
    </>
  )
}