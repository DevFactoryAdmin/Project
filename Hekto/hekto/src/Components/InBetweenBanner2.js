import rec from "./Images/inbetweenbanner2_background.png";
import "./InBetweenBanner2.css";

export default function InBetweenBanner2() {
  return (
    <>
      <div className="InBetweenBanner2" style={{ backgroundImage: `url(${rec})` }}>
        <div className="InBetweenBanner2_label1">Get Latest Update By Subscribe</div>
        <div className="InBetweenBanner2_label2">Our Newslater</div>
        <div className="InBetweenBanner2_button">
          <button>Shop Now</button>
        </div>
      </div>
    </>
  );
}