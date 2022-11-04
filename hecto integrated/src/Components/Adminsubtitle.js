import { BsFilter } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BsJustify } from "react-icons/bs";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import "./Adminsubtitle.css";
export default function Adminsubtitle() {
    return (
        <>
            <div className="adminsubtitle">
                <div className="adminsubtitle_left">
                    <div className="adminsubtitle_left_icon">
                        {/* <BsEye style={{color:'red', fontSize:50}}/> */}
                        <TiTick style={{ color: ' #F5F5F5', fontSize: 20 }} />
                    </div>
                    <div className="adminsubtitle_left_label">
                        <label>Select All</label>
                    </div>
                </div>
                <div className="adminsubtitle_center">
                    <div className="adminsubtitle_center_list1">
                        <BsFilter  style={{fontSize:20}}/>
                        <label>Filters</label>
                    </div>
                    <div className="adminsubtitle_center_list">
                        <BsSearch />
                        <label>Search</label>
                    </div>
                    <div className="adminsubtitle_center_list">
                        <MdModeEditOutline style={{fontSize:20}}/>
                        <label>Edit</label>
                    </div>

                    <div className="adminsubtitle_center_list2">
                        <MdDelete style={{fontSize:20}} />
                        <label>Delete</label>
                    </div>        
                </div>
                <div className="adminsubtitle_right">

                    <div className="adminsubtitle_right_list1">
                        <BsJustify  style={{fontSize:20}}/>
                    </div>
                    <div className="adminsubtitle_right_list2">
                        <BsFillGrid3X3GapFill  style={{fontSize:20}}/>
                    </div>
                    <div className="adminsubtitle_right_list3">
                        <FaThList  style={{fontSize:20}}/>
                    </div>

                </div>
            </div>
        </>
    )
}