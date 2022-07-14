import "./MenuNav.css";
import MenuNavItem from "../MenuNav/";

const MenuNav = () => {
  return (
    <div className="menuNav">
      <MenuNavItem text="Acrilico" />
      <MenuNavItem text="Gel" />
      <MenuNavItem text="Acrigel" />
      <MenuNavItem text="Lamparas secado" />
      <MenuNavItem text="Kits de iniciacion" />
      <MenuNavItem text="color y decoracion" />
      <MenuNavItem text="cursos presenciales y online" />
    </div>
  );
};

export default MenuNav;