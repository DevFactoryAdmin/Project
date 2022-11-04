import React from "react";
import './LeftBar.css'
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
export default function LeftBar() {
  return (
    <>
      <div className="leftbar">
        <div className="leftbar_whitecircle">
          <BsFillChatDotsFill />
        </div>{" "}
        <div className="leftbar_whitecircle">
          <BiWorld />
        </div>{" "}
        <div className="leftbar_whitecircle">
          <AiTwotoneStar />
        </div>{" "}
        <div className="leftbar_whitecircle">
          <BsMessenger />
        </div>
      </div>
    </>
  );
}
