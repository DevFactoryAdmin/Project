import fst from "./Images/TrendingProducts-fst.png";
import logo from "./Images/TrendingProducts-redc.png";
import thrd from "./Images/TrendingProducts-thrd.png";
import bc from "./Images/TrendingProducts-bc.png";
import clk from "./Images/TrendingProducts-clk.png";
import dd from "./Images/TrendingProducts-dd.png";
import plac from "./Images/TrendingProducts-plac.png";
import "./TrendingProducts.css";

function TrendingProducts() {
  return (
    <div className="trending-product-outer-cover">
      <div className="tp-r1">
        <label>Trending product</label>
      </div>

      <div className="tp-r2">
        <div className="tp-r2-cantlvr-chair-11">
          <div>
            <img src={fst} />{" "}
          </div>

          <div className="tp-r3-c3-c177555">
            <label>Cantiliver chair</label>

            <div className="tp-dollor">
              <label className="tp-dp">$26.00</label>
              <div className="tp-ash-lbl">
                <label>$26.00</label>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-r2-cantlvr-chair-1">
          <div>
            <img src={logo} />{" "}
          </div>

          <div className="tp-r2-lbs">
            <label>Cantiliver chair</label>

            <div className="tp-dollor">
              <label className="tp-dp">$26.00</label>
              <div className="tp-ash-lbl">
                <label>$26.00</label>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-r2-cantlvr-chair-2">
          <div>
            <img src={thrd} />{" "}
          </div>

          <div className="tp-r2-lbs">
            <label>Cantiliver chair</label>

            <div className="tp-dollor">
              <label className="tp-dp">$26.00</label>
              <div className="tp-ash-lbl">
                <label>$26.00</label>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-r2-cantlvr-chair-3">
          <div>
            <img src={bc} />{" "}
          </div>

          <div className="tp-r2-lbs">
            <label>Cantiliver chair</label>

            <div className="tp-dollor">
              <label className="tp-dp">$26.00</label>
              <div className="tp-ash-lbl">
                <label>$26.00</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-r3-cover">
        <div className="tp-r3-c1">
          <label className="tp-lbs-1">23% off all product</label>
          <label className="tp-shopnow">shop now</label>
          <div className="tp-r3-clk">
            <img src={clk} />{" "}
          </div>
        </div>

        <div className="tp-r3-c2">
          <label className="tp-lbs-1">23% off all product</label>
          <label className="tp-shopnow">view collection</label>
          <div className="tp-r3-clk-2">
            <img src={dd} />{" "}
          </div>
        </div>

        <div className="tp-r3-c3-cover">
          <div className="tp-r3-c3-c1">
            <div className="tp-r3-5655">
              <img src={plac} />{" "}
            </div>

            <div className="tp-r3-lastchair-1">
              <label>Exicutive Seat chair</label>
              <label>$32.00</label>
            </div>
          </div>

          <div className="tp-r3-c3-c1">
            <div className="tp-r3-5655">
              <img src={plac} />{" "}
            </div>

            <div className="tp-r3-lastchair-1">
              <label>Exicutive Seat chair</label>
              <label>$32.00</label>
            </div>
          </div>

          <div className="tp-r3-c3-c1">
            <div className="tp-r3-5655">
              <img src={plac} />{" "}
            </div>

            <div className="tp-r3-lastchair-1">
              <label>Exicutive Seat chair</label>
              <label>$32.00</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;
