import { BsFilter } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
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
                        <TiTickOutline style={{ color: ' #F5F5F5', fontSize: 20 }} />
                    </div>
                    <div className="adminsubtitle_left_label">
                        <label>Select All</label>
                    </div>
                </div>
                <div className="adminsubtitle_center">
                    <ul>
                        <li>
                            <div className="adminsubtitle_center_list">
                                <BsFilter />
                                <label>Filters</label>
                            </div>

                        </li>
                        <li>
                            <div className="adminsubtitle_center_list">
                                <BsSearch />
                                <label>Search</label>
                            </div>
                        </li>
                        <li>
                            <div className="adminsubtitle_center_list">
                                <MdModeEditOutline />
                                <label>Edit</label>
                            </div>
                        </li>
                        <li>
                            <div className="adminsubtitle_center_list">
                                <MdDelete />
                                <label>Delete</label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="adminsubtitle_right">

                    <div className="adminsubtitle_right_list1">
                        <BsJustify />
                    </div>
                    <div className="adminsubtitle_right_list2">
                        <BsFillGrid3X3GapFill />
                    </div>
                    <div className="adminsubtitle_right_list3">
                        <FaThList />
                    </div>

                </div>
            </div>
        </>
    )
}