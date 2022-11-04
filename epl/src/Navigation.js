import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Major"; 
import Test from './Test'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route> 
        <Route path="/test" element={<Test />}></Route> 
      </Routes>
    </BrowserRouter>
  );
};
export default App;
