import { Suspense, useCallback } from "react";
import App from "./App";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

async function tt() {
  var p = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ test: "test" });
    }, 3000);
  });
  console.log(p);
  return p;
}
const Test = () => {
  const ttk = tt();
  return <App ttk={ttk.test} />;
};

const Major = () => {
    const navigate=useNavigate();
  const handle = (txt) => {
    // e.preventDefault();
    alert(txt);
    navigate('/test')
  };
  const notify = () => {
    var ek = "🦄 Wow so easy!";
    toast(ek, {
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      onClick: (e) => {
        e.preventDefault();
        handle(ek);
      },
      autoClose: false,
    });
  };
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <div>
        <button onClick={notify}>Notify !</button>
      </div>
      <ToastContainer />
      <Test />
    </Suspense>
  );
};

export default Major;
