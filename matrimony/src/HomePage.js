import React, { useState } from "react";
import userpic from "./images/userpic.png";
import userpic2 from "./images/user2.png";
import bg from "./images/header-inner1.jpg";
import SingleDiv from "./SingleDiv";
import logo from "./images/logo_icon.svg";

const HomePage = () => {
  const [row1, setRow1] = useState([1, 2, 3, 4]);
  const [row2, setRow2] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <>
      <div
        className="banner_row"
        style={{
          position: "relative",
          background: `no-repeat url(${bg}) 0% /100%`,
        }}
      >
        <img
          src={require("./images/header-inner1.jpg")}
          style={{ opacity: 0 }}
        />
        <div className="homepage_row1">
          <div className="homepage_row1_row1">
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
          <div className="homepage_row1_row2">
            <input />
            <button>SEARCH</button>
          </div>
        </div>
      </div>

      <div className="homepage_row3">
        <div className="squarelist">
          <SingleDiv />
          <SingleDiv />
          <SingleDiv />
          <SingleDiv />
          <SingleDiv />
        </div>
      </div>
    </>
  );
};

export default HomePage;
