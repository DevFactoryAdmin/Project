import image1 from "./Images/relatedproducts_image1.png";
import image2 from "./Images/relatedproducts_image2.png";
import image3 from "./Images/relatedproducts_image3.png";
import image4 from "./Images/relatedproducts_image4.png";
import star from './Images/relatedproducts_star2.png';
import "./Relatedproducts.css";
export default function Relatedproducts() {
    return (
        <>
            <div className="relatedproducts">
                <div className="relatedproducts_header">
                    <label>Related Products</label>
                </div>
                <div className="relatedproducts_cont">
                    <Relatedproducts_list image={image1} label1={"Mens Fashion Wear"} label2={"$43.00"}></Relatedproducts_list>
                    <Relatedproducts_list image={image2} label1={"Women's Fashion"} label2={"$67.00"}></Relatedproducts_list>
                    <Relatedproducts_list image={image3} label1={"Wolx Dummy Fashion"} label2={"$67.00"}></Relatedproducts_list>
                    <Relatedproducts_list image={image4} label1={"Top Wall Digital Clock"} label2={"$51.00"}></Relatedproducts_list>
                </div>
            </div>
        </>
    )
}
function Relatedproducts_list({ image, label1, label2 }) {
    return (
        <>
            <div className="relatedproducts_list">
                <div className="relatedproducts_list_image">
                    <img src={image}></img>
                </div>
                <div className="relatedproducts_list_label">
                    <div className="relatedproducts_list_label_l1">
                        <label>{label1}</label>
                        <div className="relatedproducts_list_label_l1_img">
                            <img src={star}></img>
                        </div>
                    </div>
                    <div className="relatedproducts_list_label_l2">
                        <label>{label2}</label>
                    </div>
                </div>
            </div>
        </>
    )
}