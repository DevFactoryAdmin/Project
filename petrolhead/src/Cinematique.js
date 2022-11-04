import "./style.css";
import Menu from "./Menu.js";
import SingleBike from "./SingleBike";
import Header from "./Header";
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
              <img src={require("./images/bgs/IMG_5663.jpg")} />
              <div class="innercontent">
                <p class="mainhead">Cinematique</p>
                <p class="shorthead"></p>
              </div>
            </div>
          </div>
          <div class="parallax__layer parallax__layer--base">
            <div className="listrow">
              <div class="bikelistrow">
                <div className="framediv">
                <iframe
                  src="https://player.vimeo.com/video/293897877?h=879d441bf0"
                  width="560"
                  height="315"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                ></iframe>

                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ss7MGmJD-1g"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe></div>
              </div>
              <div class="bikelistrow">
                <div className="framediv">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/O-HfnM6_Al8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/HCZSXQWSlJ4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                </div>
              </div>{" "}
              <div class="bikelistrow"></div>
            </div>
          </div>
        </div>

      <Footer />
      </div>
    </>
  );
};
export default App;
