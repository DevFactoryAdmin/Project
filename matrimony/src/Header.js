import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo_icon.svg";
import { useNavigate } from "react-router-dom";
const ModalSample = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={ handleClose } centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal_inner">
          <label>Matrimony Id/Mobile No./E-mail</label>
          <input type="text" />
          <label>Password</label>
          <input type="password" />
          <div>
            <input type="checkbox" />
            <label style={{marginLeft:'10px'}} >Keep me logged in</label>
          </div>
          <button onClick={(e)=>handleClose(e)}>LOGIN</button>
          <label style={{ textAlign: "center" }}>
            Forgot Password? | Login Via OTP
          </label>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

const Header = () => {
  const [show, setShow] = useState(false);

  const navigate=useNavigate();
  const handleClose = () => {
    // e.preventDefault();
    console.log('here')
    setShow(false);
    navigate('/homepage')
  };
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <>
      {" "}
      <ModalSample show={show} handleClose={handleClose} />
      <div className="headrow wrapper">
        <div className="logo half">
          <img src={logo} />
          <div className="logo_content">
            <label className="head">ChristianMatrimony.com</label>
            <label>From Matrimony.com Group</label>
          </div>
        </div>
        <div className="right_header half">
          <label>Already a member?</label>
          <button onClick={(e) => handleShow(e)}>Log In</button>
        </div>
      </div>
    </>
  );
};

export default Header;
