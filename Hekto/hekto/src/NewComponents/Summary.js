import React from "react";
import "./Summary.css";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function Summary() {
  return (
    <>
      <div className="summary">
        <div className="summary_row">
          <label>Campign wise Prospect Count</label>
          <BsThreeDotsVertical className="icon" />{" "}
        </div>
        <div className="summary_row">
          <div className="summary_single">
            <label>Progress Growth</label>
            <label className="summary_value">#500</label>
          </div>

          <div className="summary_single">
            <label>Progress Growth</label>
            <label className="summary_value">#500</label>
          </div>

          <div className="summary_single">
            <label>Progress Growth</label>
            <label className="summary_value">#500</label>
          </div>
        </div> <div className="summary_row">
          <div className="summary_single">
            <label>Progress Growth</label>
            <label className="summary_value">#500</label>
          </div>

          <div className="summary_single">
            <label>Progress Growth</label>
            <label className="summary_value">#500</label>
          </div>

          <div className="summary_single">
            <label>Progress Growth</label>
            <label className="summary_value">#500</label>
          </div>
        </div>
      </div>
    </>
  );
}
