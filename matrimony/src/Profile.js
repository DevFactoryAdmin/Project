import React from "react";
import Header from "./Header";
import userpic from "./images/userpic.png";
import userpic2 from "./images/user2.png";
import bg from "./images/header-inner1.jpg";
import logo from "./images/logo_icon.svg";
import profilepic from "./images/profilepic.webp";

export default function Profile() {
  return (
    <>
      <div className="profile_row1">
        <img src={logo} />
        <ul>
          <li>MY HOME</li>
          <li>SEARCH</li>
          <li>MATCHES</li>
          <li>MAILBOX</li>
          <li>UPGRADE NOW</li>
        </ul>
        <div className="populate_container">
          <img className="icons profileicon" src={userpic} />
          <div className="populate_list">
            <label>Logout</label>
          </div>
        </div>
      </div>

      <div className="profile_page">
        <div className="profile_page_col1">
          <img src={profilepic} />
        </div>
        <div className="profile_page_col2">
          <div className="profile_page_col2_row1">
            <h2>Aswathy AB</h2>
          </div>{" "}
          <div className="profile_page_col2_row2">
            <label>
              E5939741 | Profile created by Self | Active - 1 week ago
            </label>
          </div>{" "}
          <div className="profile_page_col2_row3">Verified</div>{" "}
          <div className="profile_page_col2_row4">
            <div className="profile_page_col2_row4_col1">
              <ul>
                <li>27 years and 9 months, 4'7"</li>
                <li>Mother Tongue is Malayalam</li>
                <li>24 Manai Telugu Chettiyar</li>
              </ul>
            </div>
            <div className="profile_page_col2_row4_col2">
              <ul>
                <li>Lives in Rangat</li>
                <li>Studied in B.A. Degree</li>
                <li>Not working</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="about_profile">
        <h2>About Her</h2>
        <label>I belong to a middle class family with moderate values</label>
        <label>27 years and 9 months, 4'7"</label>
      </div>
    </>
  );
}
