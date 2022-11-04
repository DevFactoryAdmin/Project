import React, { useState } from "react";
import { MdCameraAlt } from "react-icons/md";
import "./Profileedit.css";
export default function Profileedit() {
  return (
    <>
      <div className="profileedit">
        <div className="profileedit_outer">
          <div className="profileedit_row1">
            <div className="profileedit_row1_img">
              <div className="style">
                <div className="profileedit_row1_img_circle">
                  {/* <FaUserCircle style={{ fontSize: "150" }} /> */}
                  <h1 className="profileedit_row1_img_circle_h1">A</h1>
                  <div className="profileedit_row1_label_camera">
                    <MdCameraAlt />
                  </div>
                </div>
              </div>
            </div>
            <div className="profileedit_row1_label">
              <label>Welcome back Vinay</label>
            </div>
          </div>
          <div className="profileedit_row2">
            <div className="profileedit_row2_row1">
              <div className="profileedit_row2_row1_col1">
                <input placeholder="First name"></input>
              </div>
              <div className="profileedit_row2_row1_col2">
                <input placeholder="Last name"></input>
              </div>
            </div>
            <div className="profileedit_row2_row2">
              <input placeholder="Phone"></input>
            </div>
            <div className="profileedit_row2_row3">
              <input placeholder="Email"></input>
            </div>
            <div className="profileedit_row2_row4">
              <div className="profileedit_row2_row4_col1">
                <input placeholder="Password"></input>
              </div>
              <div className="profileedit_row2_row4_col2">
                <input placeholder="RePassword"></input>
              </div>
            </div>
          </div>
          <div className="profileedit_row3">
            <button>Save</button>
          </div>
        </div>
      </div>
    </>
  );
}
