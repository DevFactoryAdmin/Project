import profileicon from "./Images/profileicon.png"
import bell from "./Images/bell.png";
import close from "./Images/close.png";
import bar from "./Images/menuicon.png";
import "./Admintopbar.css"
export default function Admintopbar() {
    return (
        <>
            <div className="admintopbar">
                <div className="admintopbar_div1">
                    <div className="admintopbar_div1_icon">
                        <img src={bar}></img>
                    </div>
                    <div className="admintopbar_div1_label">
                        <label>Constructor</label>
                    </div>

                </div>
                <div className="admintopbar_div2">
                    <ul>
                        <li>Dashboard</li>
                        <li>About Us</li>
                        <li>News</li>
                        <li>User Policy</li>
                        <li>Contacts</li>
                        <li>icon</li>
                    </ul>
                </div>
                <div className="admintopbar_div3">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search Products,Orders and Clients" name="search"></input>
                            <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
                <div className="admintopbar_div4">
                    <div className="admintopbar_div4_profile">
                        <img src={profileicon}></img>
                    </div>
                    <div className="admintopbar_div4_label">
                        <label>Clayton Santos</label>
                    </div>
                    <div className="admintopbar_div4_bell">
                         <img src={bell}></img>
                    </div>
                    <div className="admintopbar_div_close">
                          <img src={close}></img>
                    </div>
                </div>
            </div>
        </>
    )
}