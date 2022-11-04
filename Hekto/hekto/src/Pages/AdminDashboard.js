import React from "react";
import { BiSearch, BiWorld } from "react-icons/bi";
import {
  BsFillBellFill,
  BsMessenger,
  BsFillChatDotsFill,
  BsThreeDotsVertical,
} from "react-icons/bs";

import {
  AiFillCloseCircle,
  AiTwotoneStar,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import "./AdminDashboard.css";
import Bargraph from "../NewComponents/Bargraph";
import TopBar from "../NewComponents/TopBar";
import LeftBar from "../NewComponents/LeftBar";
import List from "../NewComponents/List";
import Summary from "../NewComponents/Summary";
import SummaryCount from "../NewComponents/SummaryCount";

export default function AdminDashboard() {
  return (
    <>
      <div className="admindashboard">
        <TopBar />
        <div className="admindashboard_row">
          <LeftBar />
          <div className="admindashboard_row_content">
            <div className="admindashboard_row_content_left">
              <div className="admindashboard_row_content_left_row1">
                <Bargraph />
                <Bargraph />
                <Bargraph />
              </div>
              <div className="admindashboard_row_content_left_row2">
                <div className="admindashboard_row_content_left_row2_left">
                  <Summary />
                </div>
                <div className="admindashboard_row_content_left_row2_right">
                  <div className="admindashboard_row_content_left_row2_right_one">
                    <SummaryCount />
                  </div>
                  <div className="admindashboard_row_content_left_row2_right_two">
                    {" "}
                    <SummaryCount />
                  </div>
                </div>
              </div>
            </div>
            <div className="admindashboard_row_content_right">
              <List />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
