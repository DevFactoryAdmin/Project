import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import Homepage from './Page/Homepage';
import Cartpage from './Page/Cartpage';
import Shippingpage from './Page/Shippingpage';
import Loginpage from './Page/Loginpage';
import Ordercompletedpage from './Page/Ordercompletedpage';
import Orderdetailpage from './Page/Orderdetailpage';
import Orderlistpage from './Page/Orderlistpage';
import Paymentpage from './Page/Paymentpage';
 import Profilepage from './Page/Profilepage';
import Shoppage from './Page/Shoppage';
import Shoppage_listpage from './Page/Shoppage_listpage';
import Singleproductpage from './Page/Singleproductpage';

export default function Navigation() {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/CartPage' element={<Cartpage />}></Route>
            <Route path='/Shippingpage' element={<Shippingpage />}></Route>
            <Route path='/loginpage' element={<Loginpage/>}></Route>
            <Route path='/ordercompletedpage' element={<Ordercompletedpage/>}></Route>
            <Route path='/orderdetailpage' element={<Orderdetailpage/>}></Route>
            <Route path='/orderlistpage' element={<Orderlistpage/>}></Route>
            <Route path='/paymentpage' element={<Paymentpage/>}></Route>
            <Route path='/profilepage' element={<Profilepage/>}></Route>
            <Route path='/Shoppage' element={<Shoppage/>}></Route>
            <Route path='/shoppage_listpage' element={<Shoppage_listpage/>}></Route>
            <Route path='/singleproductpage' element={<Singleproductpage/>}></Route>
        </Routes>
    </HashRouter>
  )
}
