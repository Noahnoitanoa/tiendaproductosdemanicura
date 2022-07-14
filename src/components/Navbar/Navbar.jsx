import "./NavBar.css";
import CartWidget from "../CartWidget/cartWidget";
import MenuNav from "../MenuNav/MenuNav";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";
import { useContext, useEffect, useState } from "react";

const NavBar = () => {
  const { cantidadEnCarrito } = useContext(CartContext);
  const [carritoVacio, setCarritoVacio] = useState(true);

  useEffect(() => {
    setCarritoVacio(cantidadEnCarrito > 0 ? false : true);
  }, [cantidadEnCarrito]);

  return (
    <div className="navBar">
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "/img/logoMain.png"}
          className="logoMain"
        />
      </Link>
      <MenuNav />
      {!carritoVacio && <CartWidget />}
    </div>
  );
};

export default NavBar;
