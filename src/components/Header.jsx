import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div>
          <h3 className="router">Router</h3>
        </div>
        <div>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link to={"/users"}>Users</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
