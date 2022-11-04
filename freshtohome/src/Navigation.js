import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./App";
import Cart from "./Cart";
import "./css/style.css";
import Product from "./Product";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
