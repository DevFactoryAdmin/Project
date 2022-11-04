import { BsThreeDotsVertical } from "react-icons/bs";
import "./Adminlinegraph.css";
export default function adminlinegraph() {
    return (
        <>
            <div className="adminlinegraph">
                <div className="adminlinegraph_header">
                    <div className="adminlinegraph_header_label">
                        <label>Total Sales</label>
                    </div>
                    <div className="adminlinegraph_header_icon">
                        <BsThreeDotsVertical/>
                    </div>
                </div>
                <div className="adminlinegraph_price">
                    <div className="adminlinegraph_price_p1">
                        <label>$18100</label>
                    </div>
                    <div className="adminlinegraph_price_p2">
                        <label>+5%</label>
                    </div>
                </div>
                <div className="adminlinegraph_graph">
                    <div className="adminlinegraph_graph_row1">
                        <div className="adminlinegraph_graph_year">
                            <label>2029</label>
                        </div>
                        <div className="adminlinegraph_graph_bar1">

                        </div>
                    </div>
                    <div className="adminlinegraph_graph_row2">
                        <div className="adminlinegraph_graph_year">
                            <label>2028</label>
                        </div>
                        <div className="adminlinegraph_graph_bar2">

                        </div>
                    </div>
                    <div className="adminlinegraph_graph_row3">
                        <div className="adminlinegraph_graph_year">
                            <label>2027</label>
                        </div>
                        <div className="adminlinegraph_graph_bar3">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}