import "./style.css";
import Menu from "./Menu.js";
import SingleBike from "./SingleBike";
import Header  from "./Header";
import Footer from "./Footer";
const App = () => {
  return (
    <>
    <Header />
      <div class="parallax">
        <div class="parallax__group">
          <div class="parallax__layer parallax__layer--back">
            <div class="row2">
              {" "}
              <img src={require("./images/bgs/IMG_0095.jpg")} />
              <div class="innercontent">
                <p class="mainhead">About Us</p>
                <p class="shorthead"></p>
              </div>
            </div>
          </div>
          <div class="parallax__layer parallax__layer--base">
            <div className="about_row">
                <div className="about_row_col1">
                    <h2>About Us</h2>
                    <p>My love for nature, travel, music, motorcycles, jeeps, art and food has inspired my journeys. I keenly observe the culture, art, cuisine, seasonal fruits and music of every new place I explore. 

My passion for riding lead me to build Maverick, my first custom motorcycle and then it took the form of my bike customization, Petrolhead Customs.
</p>
                </div>
                <div className="about_row_col2">
                    
                </div>
            </div>
          </div>
        </div>

       <Footer />
      </div>
    </>
  );
};
export default App;
