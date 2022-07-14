import "./MenuNavItem.css";
import { Link } from "react-router-dom";

const MenuNavItem = ({ text }) => {
  const path = "/categoria/" + text;
  return (
    <div className="menuNavItem">
      <Link to={path}>
        <p className="menuNavItem-item">{text}</p>
      </Link>
    </div>
  );
};

export default MenuNavItem;
