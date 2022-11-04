import { Link } from 'react-router-dom';
import Menu from './Menu'
const Header=()=>{
    return <div class="row1">
    <div class="logo">
      <Link to="/"> <img alt="logo" src={require("./images/logo.jpg")} /> </Link>
    </div>
    <Menu />
  </div>
}
export default Header;