import chair1 from "./Images/topcategories_chair1.png";
import chair2 from "./Images/topcategories_chair2.png";
import chair3 from "./Images/topcategories_chair3.png";
import chair4 from "./Images/topcategories_chair4.png";
import slideimage from "./Images/topcategories_slideimage.png";
import "./Topcategories.css";
export default function Topcategories() {
    return (
        <>
            <div className="Topcategories">
                <div className="Topcategories_header">
                    <label>Top Categories</label>
                </div>
                <div className="Topcategories_cont">
                    <Topcategories_list image={chair1}></Topcategories_list>
                    <Topcategories_list image={chair2}></Topcategories_list>
                    <Topcategories_list image={chair3}></Topcategories_list>
                    <Topcategories_list image={chair4}></Topcategories_list>
                </div>
                <div className="Topcategories_footer">
                    <img src={slideimage}></img>
                </div>
            </div>
        </>
    )
}
// to display similiar component
function Topcategories_list({ image }) {
    return (
        <>
            <div className="Topcategories_list">
                <div className="Topcategories_list_img">
                    {/* assigning images to a variable */}
                    <img src={image}></img>
                    <button className="Topcategories_list_img_button">View Shop</button>
                </div>
                <div className="Topcategories_list_label">
                    <label className="Topcategories_list_label_l1">Mini LCW Chair</label>
                    <label className="Topcategories_list_label_l2">$56.00</label>
                </div>
            </div>
        </>
    )
}