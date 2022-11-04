import AddressList_editingimage from "./Images/AddressList_editingimage.png"
import AddressList_deletebutton from "./Images/AddressList_deletebutton.png"
import AddressList_plusbutton from "./Images/AddressList_plusbutton.png"
import "./AddressList.css"
function AddressList() {
    return <>
    <div className="AddressList">
        <div className="AddressList_body">
            <div className="AddressList_col0">
                <div className="AddressList_heading">
                    <label> </label>
                </div>

                <div className="AddressList_col0_button1">
                    <button> </button>
                </div>

                <div className="AddressList_col0_button2">
                    <button> </button>
                </div>
                <div className="AddressList_col0_button3">
                    <button><img src={AddressList_plusbutton} /> </button>
                </div>

            </div>

            <div className="AddressList_col1">

                <div className="AddressList_heading">
                    <label> Address</label>
                </div>
                <div className="AddressList_address">
                    <label> Address 1</label>
                    <label>City1</label>
                    <label>State</label></div>
                <div className="AddressList_address">
                    <label> Address 1</label>
                    <label>City1</label>
                    <label>State</label></div>
                <div className="AddressList_address1" > <label> Add New</label></div>
            </div>
            <div className="AddressList_col2">
                <div className="AddressList_heading">
                    <label> Edit</label>
                </div>

                <div className="AddressList_editbutton">
                    <button><img src={AddressList_editingimage} /> </button> </div>
                <div className="AddressList_editbutton">
                    <button><img src={AddressList_editingimage} /> </button> </div>
            </div>
            <div className="AddressList_col3">
                <div className=" AddressList_heading">
                    <label> Delete</label> </div>
                <div className="AddressList_deletebutton">
                    <button> <img src={AddressList_deletebutton} /></button>
                </div>
                <div className="AddressList_deletebutton">
                    <button> <img src={AddressList_deletebutton} /></button>
                </div>
            </div>
        </div>
        </div>

    </>
}
export default AddressList;