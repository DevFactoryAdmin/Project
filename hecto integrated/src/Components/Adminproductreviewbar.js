import { AiFillStar } from "react-icons/ai";
import "./Adminproductreviewbar.css"
export default function Adminproductreviewbar() {
    return (
        <>
            <div className="adminproductreviewbar">
                <div className="adminproductreviewbar_left">
                    <label>21 Reviews</label>
                </div>
                <div className="adminproductreviewbar_center">
                    <Adminproductreviewbar_func icon={<AiFillStar style={{color:"#FFDC24",fontSize:"20"}}/>} label1="Convenience" label2="4.9"></Adminproductreviewbar_func>
                    <Adminproductreviewbar_func icon={<AiFillStar style={{color:"#FF24DC",fontSize:"20"}}/>} label1="Functionality" label2="5.0"></Adminproductreviewbar_func>
                    <Adminproductreviewbar_func icon={<AiFillStar style={{color:"#242DFF",fontSize:"20"}}/>} label1="Design" label2="5.0"></Adminproductreviewbar_func>
                </div>
                <div className="adminproductreviewbar_right">
                    <label>5.0</label>
                </div>
            </div>
        </>
    )
}
function Adminproductreviewbar_func({icon,label1,label2}) {
    return (
        <>
            <div className="adminproductreviewbar_func">
                <div className="adminproductreviewbar_func_icon">
                    {icon}
                </div>
                <div className="adminproductreviewbar_func_label1">
                    <label>{label1}</label>
                </div>
                <div className="adminproductreviewbar_func_label2">
                    <label>{label2}</label>
                </div>

            </div>
        </>
    )
}