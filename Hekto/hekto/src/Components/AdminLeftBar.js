import AdminLeftBar_messengericon from "./Images/AdminLeftBar_messengericon.png"
import "./AdminLeftBar.css"
import { FaGlobeAmericas } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import { HiTrendingUp } from "react-icons/hi";
import { FaCompass } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import AdminLeftBar_humanimage from "./Images/AdminLeftBar_humanimage.jpg"
function AdminLeftBar() {
    return <>
        <div className="AdminLeftBar_body">
            <div className="AdminLeftBar_top">

                <div className="AdminLeftBar_button"> <button> <FaCompass style={{ color: "#C3CAD9", fontSize: "1rem" }} />    </button></div>
                <div className="AdminLeftBar_button"> <button> <BsFillStarFill style={{ color: "#C3CAD9", fontSize: "1rem" }} />    </button></div>
                <div className="AdminLeftBar_button"> <button> <BsMessenger style={{ color: "#C3CAD9", fontSize: "1rem" }} />    </button></div>
                <div className="AdminLeftBar_button"> <button> <HiTrendingUp style={{ color: "#C3CAD9", fontSize: "1rem" }} />    </button></div>
                <div className="AdminLeftBar_button"> <button> <FaGlobeAmericas style={{ color: "#C3CAD9", fontSize: "1rem" }} />    </button></div>
                <div className="AdminLeftBar_button"> <button> <BsBuilding style={{ color: "#C3CAD9", fontSize: "1rem" }} />    </button></div>
            </div>

            <div className="AdminLeftBar_bottom">
                <div className="AdminLeftBar_button2">  <button> <AiFillPlusCircle style={{ color: "#C3CAD9", fontSize: "1rem" }} />    </button></div>
                <div className="AdminLeftBar_bottom_image"> <img src={AdminLeftBar_humanimage} /></div>
                <div className="AdminLeftBar_bottom_image"> <img src={AdminLeftBar_humanimage} /></div>
                <div className="AdminLeftBar_bottom_image"> <img src={AdminLeftBar_humanimage} /></div>
                <div className="AdminLeftBar_bottom_image"> <img src={AdminLeftBar_humanimage} /></div>
            </div>
        </div>

    </>
}
export default AdminLeftBar;