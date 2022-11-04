import React from "react";
import "./List.css";
import { BsThreeDotsVertical, BsFillBellFill } from "react-icons/bs";
export default function List() {
  return (
    <>
      <div className="list">
        <div className="list_row">
          <label>Campign wise Prospect Count</label>
          <BsThreeDotsVertical className="icon" />{" "}
        </div>
        <div className="list_row">
          <div className="list_whitecircle">
            <BsFillBellFill />
          </div>
          <label>Larry Clayton</label>
          <div>
            <button>Pending</button>
          </div>
        </div>
        <div className="list_row">
          <div className="list_whitecircle">
            <BsFillBellFill />
          </div>
          <label>Larry Clayton</label>
          <div>
            <button>Pending</button>
          </div>
        </div>
        <div className="list_row">
          <div className="list_whitecircle">
            <BsFillBellFill />
          </div>
          <label>Larry Clayton</label>
          <div>
            <button>Pending</button>
          </div>
        </div>
        <div className="list_row">
          <div className="list_whitecircle">
            <BsFillBellFill />
          </div>
          <label>Larry Clayton</label>
          <div>
            <button>Pending</button>
          </div>
        </div>
        <div className="list_row">
          <div className="list_whitecircle">
            <BsFillBellFill />
          </div>
          <label>Larry Clayton</label>
          <div>
            <button>Pending</button>
          </div>
        </div>
        <div className="list_row">
          <div className="list_whitecircle">
            <BsFillBellFill />
          </div>
          <label>Larry Clayton</label>
          <div>
            <button>Pending</button>
          </div>
        </div>
        <div className="list_row">
          <div className="list_whitecircle">
            <BsFillBellFill />
          </div>
          <label>Larry Clayton</label>
          <div>
            <button>Pending</button>
          </div>
        </div>
      </div>
    </>
  );
}
