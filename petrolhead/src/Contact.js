import "./style.css";
import Menu from "./Menu.js";
import SingleBike from "./SingleBike";
import Header  from "./Header";
import Footer from "./Footer";
import {FaFacebook, FaPhoneSquareAlt, FaInstagram} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const App = () => {
  return (
    <>
    <Header />
      <div class="parallax">
        <div class="parallax__group">
          <div class="parallax__layer parallax__layer--back">
            <div class="row2">
              {" "}
              <img src={require("./images/bgs/IMG_5871.jpg")} />
              <div class="innercontent">
                <p class="mainhead">Contact Us</p>
                <p class="shorthead"></p>
              </div>
            </div>
          </div>
          <div class="parallax__layer parallax__layer--base">
            <div className="about_row">
                <div className="about_row_col1">
                    <h2>Contact Us</h2>
                    <p className="contact_p_tag">
                      <FaPhoneSquareAlt className="contact_icon"/> +91 95391 39363 
                    </p><p  className="contact_p_tag">
                      <FaFacebook  className="contact_icon"/> /petrolheadcustoms
                    </p><p  className="contact_p_tag"  >
                      <FaInstagram  className="contact_icon"/> /petrolheadcustoms
                    </p> <p  className="contact_p_tag" style={{marginBottom: '30px'}}>
                      <MdEmail  className="contact_icon"/> petrolheadcustomsgarage@gmail.com
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
