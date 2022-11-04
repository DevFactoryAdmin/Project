import "./style.css";
import Menu from "./Menu.js"
import Footer from './Footer'
const App = () => {
  return (
    <>
      <div class="row1">
        <div class="logo">
          <img alt="logo" src={require("./images/logo.jpg")} />
        </div>
        <Menu />
      </div>
      <div class="row2">
        <video autoplay="autoplay" loop="true" autoPlay muted>
          <source src={require("./images/video.mp4")} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
        <div class="innercontent">
          <p class="mainhead">Tatvamasi</p>
          <p class="shorthead">A film by Vinil Varghese</p>
        </div>
      </div>
      <div class="row3">
        <div class="row3_col1">
          <img src={require("./images/left.jpg")} />
        </div>
        <div class="row3_col2">
          <div class="row3_col2_row1">
            {" "}
            <img src={require("./images/bgs/IMG_1609.jpg")} />
          </div>
          <div class="row3_col2_row2">
            {" "}
            <img src={require("./images/bgs/IMG_1653.jpg")} />
          </div>
        </div>
      </div>
     <Footer />
    </>
  );
};
export default App;
