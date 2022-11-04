import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import Home from "./HomePage";
// import ShopPage from "./ShopPage";
import './style.css'
export default function Navigation() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AdminDashboard" element={<AdminDashboard />}></Route>
          {/* <Route path="/Shop" element={<ShopPage />}></Route> */}
        </Routes>
      </HashRouter>
    </>
  );
}
