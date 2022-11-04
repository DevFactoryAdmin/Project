import { BsQuestionCircleFill } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./Adminlogstatistics.css";
export default function Adminlogstatistics() {
    return (
        <>
            <div className="adminlogstatistics">
                <div className="adminlogstatistics_header">
                    <div className="adminlogstatistics_header_left">
                        <div className="adminlogstatistics_header_left_label">
                            <label>Online Store Visits by Location</label>
                        </div>
                        <div className="adminlogstatistics_header_left_icon">
                            <BsQuestionCircleFill />
                        </div>
                    </div>
                    <div className="adminlogstatistics_header_right">
                        <BiDotsVerticalRounded />
                    </div>
                </div>
                <div className="adminlogstatistics_header_cont">
                    <Adminlogstatistics_list country="United States" digit="1436" icon={<AiOutlineArrowUp style={{ color: 'green', fontSize: '20px' }} />} percent="5.8%"></Adminlogstatistics_list>
                    <Adminlogstatistics_list country="Canada" digit="983" icon={<AiOutlineArrowDown style={{ color: 'red', fontSize: '20px' }} />} percent="3.2%"></Adminlogstatistics_list>
                    <Adminlogstatistics_list country="Germany" digit="567" icon={<AiOutlineArrowUp style={{ color: 'green', fontSize: '20px' }} />} percent="2.1%"></Adminlogstatistics_list>
                    <Adminlogstatistics_list country="France" digit="432" icon={<AiOutlineArrowUp style={{ color: 'green', fontSize: '20px' }} />} percent="4.6%"></Adminlogstatistics_list>
                    <Adminlogstatistics_list country="China" digit="235" icon={<AiOutlineArrowDown style={{ color: 'red', fontSize: '20px' }} />} percent="9.8%"></Adminlogstatistics_list>
                    <Adminlogstatistics_list country="Japan" digit="123" icon={<AiOutlineArrowUp style={{ color: 'green', fontSize: '20px' }} />} percent="6.3%"></Adminlogstatistics_list>
                </div>
            </div>
        </>
    )
}
function Adminlogstatistics_list({ country, digit, icon, percent }) {
    return (
        <>
            <div className="adminlogstatistics_list">
                <div className="adminlogstatistics_list_country">
                    <label>{country}</label>
                </div>
                <div className="adminlogstatistics_list_right">
                    <div className="adminlogstatistics_list_right_digit">
                        <label>{digit}</label>
                    </div>
                    <div className="adminlogstatistics_list_right_icon">
                        <label>{icon}</label>
                    </div>
                    <div className="adminlogstatistics_list_right_percent">
                        <label>{percent}</label>
                    </div>
                </div>
            </div>
        </>
    )
}