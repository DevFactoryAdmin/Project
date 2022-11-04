import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/style.css";
import {
  FaSearch,
  FaAngleDown,
  FaEllipsisV,
  FaAngleRight,
} from "react-icons/fa";
import { toHaveTextContent } from "@testing-library/jest-dom/dist/matchers";
const App = ({ttk}) => {
  const navigate = useNavigate();
  const [tableArray, setTableArray] = useState([
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
    { pos: 1, club: "Clubname", pl: "38", gd: "+72", pts: "93" },
  ]);
  const [imgarray, setImgArray] = useState([
    { url: "./images/t1@x2.png" },
    { url: "./images/t2@x2.png" },
    { url: "./images/t3.png" },
    { url: "./images/t4@x2.png" },
    { url: "./images/t6@x2.png" },
    { url: "./images/t7@x2.png" },
    { url: "./images/t8@x2.png" },
    { url: "./images/t11@x2.png" },
    { url: "./images/t13@x2.png" },
    { url: "./images/t4@x2.png" },
    { url: "./images/t20@x2.png" },
    { url: "./images/t21@x2.png" },
    { url: "./images/t31@x2.png" },
    { url: "./images/t36@x2.png" },
    { url: "./images/t39@x2.png" },
    { url: "./images/t43@x2.png" },
    { url: "./images/t45@x2.png" },
    { url: "./images/t57@x2.png" },
    { url: "./images/t90@x2.png" },
    { url: "./images/t94@x2.png" },
  ]);
  return (
    <>
      <div className="row1">
        <label>CLUB SITES</label>
        <div className="imagegroup">
          {imgarray.map((itm) => {
            return <img className="topimage" src={require(`${itm.url}`)} />;
          })}
        </div>
      </div>
      <div className="row2">
        <div className="left">
          <div className="drowpdown">
            <label className="dropbtn">
              Premier League <FaAngleDown />
            </label>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className="drowpdown">
            <label className="dropbtn">
              Fantasy <FaAngleDown />
            </label>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className="drowpdown">
            <label className="dropbtn">Video</label>
          </div>
          <div className="drowpdown">
            <label className="dropbtn">
              Communities <FaAngleDown />
            </label>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className="drowpdown">
            <label className="dropbtn">
              More <FaAngleDown />
            </label>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
        <div className="right">
          <label className="reone">No Room For Racism</label>
          <label className="retwo">Signin</label>
          <FaSearch />
        </div>
      </div>
      <div className="row3">
        <ul>
          <li className="active">Home</li>
          <li>Fixtures</li>
          <li>Results</li>
          <li>Tables</li>
          <li>Awards</li>
          <li>Hall of Fame</li>
          <li>Transfers</li>
          <li>Broadcast</li>
        </ul>
        <div className="row3_right">
          <FaEllipsisV />
          <label>More</label>
        </div>
      </div>
      <div className="row4">
        <div className="row4_col1">
          <div className="row4_col1_inner">
            <label>Premier League</label>
            <button>First Team</button>
            <table>
              <thead>
                <th>Pos</th>
                <th>Club</th>
                <th>Pl</th>
                <th>GD</th>
                <th>Pts</th>
              </thead>
              <tbody>
                {tableArray.map((itm) => {
                  return (
                    <tr>
                      <td>{itm.pos}</td>
                      <td>{itm.club}</td>
                      <td>{itm.pl}</td>
                      <td>{itm.gd}</td>
                      <td>{itm.pts}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row4_col2">
          <div className="row4_col2_row1">
            <div className="row4_col2_row1_col1">
              <img src={require("./images/banner.png")} />
            </div>
            <div className="row4_col2_row1_col2">
              <h2>Cahill's spectacular overhead kick</h2>
              <label>
                Enjoy the Everton legend's improvised effort to earn a late
                point at Chelsea in 2007
              </label>
              <h4>Related Content</h4>
              <ul>
                <li>The best acrobatic goals in Premier League history</li>
                <li>Best Premier League goals by Australians</li>
                <li>Great goals of the 2021/22 season</li>
              </ul>
            </div>
          </div>
          <div className="row4_col2_row2">
            <div className="row4_col2_row2_singlecontent">
              <div className="row4_col2_row2_img"></div>
              <div className="row4_col2_row2_text">
                <label>Fantasy Premier League</label>
                <label>'FPL makes watching the matches more fun'</label>
              </div>
            </div>{" "}
            <div className="row4_col2_row2_singlecontent">
              <div className="row4_col2_row2_img"></div>
              <div className="row4_col2_row2_text">
                <label>Fantasy Premier League</label>
                <label>'FPL makes watching the matches more fun'</label>
              </div>
            </div>
          </div>
          <div className="row4_col2_row3">
            <div className="row4_col2_row3_row1">
              <h2>Latest News</h2>
              <h5>
                Latest News <FaAngleRight />{" "}
              </h5>
            </div>

            <div className="row4_col2_row3_row2">
              <div className="row4_col2_row3_row2_single">
                <div className="container">
                  <img src={require("./images/banner.png")} />
                </div>
                <label>Premier League club summer 2022 friendly fixtures</label>
              </div>{" "}
              <div className="row4_col2_row3_row2_single">
                <div className="container">
                  <img src={require("./images/banner.png")} />
                </div>
                <label>Premier League club summer 2022 friendly fixtures</label>
              </div>{" "}
              <div className="row4_col2_row3_row2_single">
                <div className="container">
                  <img src={require("./images/banner.png")} />
                </div>
                <label>Premier League club summer 2022 friendly fixtures</label>
              </div>
            </div>


            <div className="row4_col2_row3_row1">
              <h2>Latest News</h2>
              <h5>
                Latest News <FaAngleRight />{" "}
              </h5>
            </div>

            <div className="row4_col2_row3_row4">
              <div className="row4_col2_row3_row4_single">
                <div className="container">
                  <img src={require("./images/banner.png")} />
                </div>
                <label>Premier League club summer 2022 friendly fixtures</label>
              </div>{" "}
              <div className="row4_col2_row3_row4_single">
                <div className="container">
                  <img src={require("./images/banner.png")} />
                </div>
                <label>Premier League club summer 2022 friendly fixtures</label>
              </div>{" "}
               
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <h2>Premier League</h2>
        <ul>
          <li>Home</li>
          <li>Fixtures</li>
          <li>Results</li>
          <li>Tables</li>
          <li>Transfers</li>
          <li> Broadcast</li>
        </ul> 
        {ttk}
      </div>
    </>
  );
};
export default App;
