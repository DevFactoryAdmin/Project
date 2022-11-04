import React from "react";
import { useNavigate } from "react-router-dom";
import profilepic from "./images/profilepic.webp";

export default function SingleDiv() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/profile");
  };
  return (
    <div className="singlediv" onClick={(e) => handleClick(e)}>
      <img src={profilepic} />
      <div className="singlediv_details_details">
        <div className="singlediv_details_details_row">
          <h2>WTTR**</h2>
        </div>
        <div className="singlediv_details_details_row">
          <label>26 Years, 5' 5"</label>
          <label>BHMS</label>
        </div>
        <div className="singlediv_details_details_row">
          <label>Mumbai</label>
          <label>Doctor</label>
        </div>
        <div className="singlediv_details_details_row">
          <label>Hindu, Brahmin Bhumihar</label>
          <label>₹ 0 - 1 Lakh</label>
        </div>
        <div className="singlediv_details_details_row">
          <label>Hindi-UP/UK</label>
          <label>Never Married</label>
        </div>
      </div>
    </div>
  );
}
