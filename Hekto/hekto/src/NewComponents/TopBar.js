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
import './TopBar.css'
export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <div className="topbar_whitecircle">
          <AiOutlineMenu />
        </div>
        <label className="topbar_logo">Bizcloud</label>
        <ul>
          <li>Dashboard</li>
          <li>Leads</li>
          <li>Campaigns</li>
          <li>Prospects</li>
          <li>Tasks</li>
        </ul>
        <div className="topbar_search">
          <BiSearch />
          <input type={"text"} />
          <RiArrowRightSLine />
        </div>
        <div className="topbar_user">
          <FaUserCircle className="topbar_user_icon" />
          <label>Clayton Santos</label>
        </div>
        <div className="topbar_whitecircle">
          <BsFillBellFill />
        </div>
        <div className="topbar_whitecircle">
          <AiFillCloseCircle />
        </div>
      </div>
    </>
  );
}
