import "./Discountitem.css"
import Discountitem_tickmark from "./Images/Discountitem_tickmark.png"
import Discountitem_chair1 from "./Images/Discountitem_chair1.png"

function Discountitem({handleShoppageClick}) {
    return <>

        <div className="Discountitem_row1">
            <div className="Discountitem_row1_line1">
                <label> Discount Item </label>
            </div>
            <div className="Discountitem_row1_line2">
                <div className="Discountitem_row1_line2_b1">
                    <button> Wood Chair</button>
                </div>
                <div className="Discountitem_row1_line2_b2">
                    <button>Plastic Chair </button>
                </div>
                <div className="Discountitem_row1_line2_b3">
                    <button>Sofa Colletion </button>

                </div>

            </div>
        </div>
        <div className="Discountitem_row2">
            <div className="Discountitem_row2_col1">
                <div className="Discountitem_row2_col1_l1">
                    <label> 20% Discount Of All Products</label>
                </div>
                <div className="Discountitem_row2_col1_l2">
                    <label> Eams Sofa Compact </label>
                </div>
                <div className="Discountitem_row2_col1_l3">
                    <label> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</label>
                </div>
                <div className="Discountitem_row2_col1_l4">
                    <div className="Discountitem_row2_col1_l4_c1">
                        <div className="Discountitem_row2_col1_l4_c1_l1">
                            <img src={Discountitem_tickmark} />
                            <label> Material expose like metals</label>
                        </div>
                        <div className="Discountitem_row2_col1_l4_c1_l2">
                            <img src={Discountitem_tickmark} />
                            <label> Simple neutral colours.</label>
                        </div>
                    </div>
                    <div className="Discountitem_row2_col1_l4_c2">
                        <div className="Discountitem_row2_col1_l4_c2_l1">
                            <img src={Discountitem_tickmark} />
                            <label> Clear lines and geomatric figures</label>
                        </div>
                        <div className="Discountitem_row2_col1_l4_c2_l2">
                            <img src={Discountitem_tickmark} />
                            <label> Material expose like metals</label>
                        </div>
                    </div>

                </div>
                <div className="Discountitem_row2_col1_l5">
                    <button onClick={e=>handleShoppageClick()}> Shop Now</button>
                </div>
            </div>
            <div className="Discountitem_row2_col2">
                <img src={Discountitem_chair1} />
            </div>
        </div>


    </>
}
export default Discountitem