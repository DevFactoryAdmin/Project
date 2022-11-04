
import { 
    BsThreeDotsVertical,
  } from "react-icons/bs";
import './Bargraph.css'
export default function Bargraph() {
    return (
      <>
        <div className="bargraph">
          <div>
            <label>Campign wise Prospect Count</label>
            <BsThreeDotsVertical className="icon" />{" "}
          </div>
          <ul>
            <li className="blue">
              <label className="title">8</label>
              <div></div> <label>Cam 1</label>
            </li>
            <li className="green">
              <label className="title">7</label>
              <div></div> <label>Cam2</label>
            </li>
            <li className="red">
              <label className="title">10</label>
              <div></div> <label>Cam3</label>
            </li>
          </ul>
        </div>
      </>
    );
  }
  