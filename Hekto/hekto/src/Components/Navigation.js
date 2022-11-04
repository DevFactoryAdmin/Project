import { render } from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
// import profile from "./profile";
import Gridview from "./Gridview";
import Offerlist from "./Offerlist";
import TrendingProducts from "./TrendingProducts";
import Orderlist from "./Orderlist";
import Adminproductcostsummary from "./Adminproductcostsummary";

// import your route components too

export default function Navigation() {
  return (

  
    <>
      <HashRouter>
        <Routes>
          <Route path="/TrendingProduct" element={<TrendingProducts />}></Route>

          <Route path="/Gridview" element={<Gridview />}></Route>
          <Route path="/Orderlist" element={<Orderlist />}></Route>

          <Route path="/Offerlist" element={<Offerlist />}></Route>

          <Route path="/Adminproductcostsummary" element={<Adminproductcostsummary />}></Route>

        </Routes>
      </HashRouter>
      {/* document.getElementById("root") */}
      {/* ); */}
    </>

);


}
