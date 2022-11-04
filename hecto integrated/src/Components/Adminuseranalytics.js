import { BsThreeDots } from "react-icons/bs";
import "./Adminuseranalytics.css";
export default function Adminuseranalytics() {
    return (
        <>
           <div className="adminuseranalytics">
                <div className="adminuseranalytics_header">
                    <div className="adminuseranalytics_header_left">
                        <label>Analytics</label>
                    </div>
                    <div className="adminuseranalytics_header_right">
                        <BsThreeDots />
                    </div>
                </div>
                <div className="adminuseranalytics_cont">
                    <Adminuseranalytics_details column1={"$1456"} column2={"Total Sales"}></Adminuseranalytics_details>
                    <Adminuseranalytics_details column1={"14"} column2={"Products"}></Adminuseranalytics_details>
                    <Adminuseranalytics_details column1={"$265"} column2={"Profit Sales"}></Adminuseranalytics_details>
                    <Adminuseranalytics_details column1={"78%"} column2={"Completed"}></Adminuseranalytics_details>
                </div>
            </div>
        </>
    )
}
function Adminuseranalytics_details({ column1, column2 }) {
    return (
        <>
            <div className="adminuseranalytics_details">
                <div className="adminuseranalytics_details_col1">
                    <label>{column1}</label>
                </div>
                <div className="adminuseranalytics_details_col2">
                    <label>{column2}</label>
                </div>
            </div>
        </>
    )
}