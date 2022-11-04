import "./style.css";
import Menu from "./Menu.js";
import SingleBike from "./SingleBike";
import Header from "./Header";
const App = () => {
  return (
    <>
      <Header />
      <div class="parallax">
        <div class="parallax__group">
          <div class="parallax__layer parallax__layer--back">
            <div class="row2">
              {" "}
              <img src={require("./images/banner.jpg")} />
              <div class="innercontent">
                <p class="mainhead">HeadOne</p>
                <p class="shorthead">HeadTwo</p>
              </div>
            </div>
          </div>
          <div class="parallax__layer parallax__layer--base">
            <div className="listrow">
              <div class="bikelistrow">
                <SingleBike />
                <SingleBike />
                <SingleBike />
                <SingleBike />
              </div>{" "}
              <div class="bikelistrow">
                <SingleBike />
                <SingleBike />
                <SingleBike />
                <SingleBike />
              </div>{" "}
              <div class="bikelistrow">
                <SingleBike />
                <SingleBike />
                <SingleBike />
                <SingleBike />
              </div>
            </div>
          </div>
        </div>

        <div class="footerrow">
          <div class="fr_col1">
            <h4>About</h4>
            <ul>
              <li>
                Blitz Motorcycles is a Paris-based custom garage that conceives,
                customises and hand finishes motorcycles to create unique,
                one-of-a-kind machines.
              </li>
              <li>
                <p>Copyright © 2020 Blitz Motorcycles. All rights reserved.</p>
              </li>
            </ul>
          </div>
          <div class="fr_col2 col">
            <h4>Information</h4>
            <ul>
              <li>About Blitz</li>
              <li>Partners</li>
              <li>Press</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div class="fr_col3 col">
            <h4>Social</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Pinterest</li>
            </ul>
          </div>
          <div class="fr_col4 col">
            <h4>Contact</h4>
            <ul>
              <li>contact@blitz-motorcycles.com</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
