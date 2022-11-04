import { Link } from "react-router-dom";

const App=()=>{
    return <div class="menu">
    <nav>
      <ul>
        <Link className="nodecoration" to="/bikes">
          <li>Builds</li>
        </Link>
        |
        {/* <Link className="nodecoration" to="/shop">
          <li>Shop</li>
        </Link>
        | */}
        <Link className="nodecoration" to="/Cinematique">
          <li>Cinematique</li>
        </Link>
        {/* |
        <Link className="nodecoration" to="/LifeStyle">
          <li>Lifestyle</li>
        </Link> */}
        |
        <Link className="nodecoration" to="/About">
          <li>About Us</li>
        </Link>
        |
        <Link className="nodecoration" to="/Contact">
          <li>Contact Us</li>
        </Link>
      </ul>
    </nav>
  </div>;
}
export default App;