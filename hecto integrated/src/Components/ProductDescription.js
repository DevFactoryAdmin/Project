import ProductDescription_arrow from "./Images/ProductDescription_arrow.png"
import "./ProductDescription.css"
function ProductDescription() {
    return <>
        <div className="ProductDescription_body">
            <div className="ProductDescription_r1">
                <div className="ProductDescription_r1_button">
                    <button>Description </button>
                    <button> Additional Info</button>
                    <button>Reviews </button>
                    <button>Video
                    </button>
                </div>
            </div>

            <div className="ProductDescription_r2">
                <h1> Varius tempor </h1>
                <label> Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum.
                    Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus
                    cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</label>
            </div>

            <div className="ProductDescription_r3">
                <h1> More details</h1>
                <ul>
                    {/* < img src={arrow}/> */}
                    <li> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                    <li> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                    <li> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                    <li> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                </ul>

            </div>
        </div>
    </>
}
export default ProductDescription;