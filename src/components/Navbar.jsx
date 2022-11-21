import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import "../assets/navbar.css";
import Logo from "./Logo";
import MenuOpen from "../assets/images/menuOpen.png";
import MenuClose from "../assets/images/menuClose.png";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(MenuOpen);

  const handleMenuToggle = () => {
    menuToggle === MenuOpen
      ? setMenuToggle(MenuClose)
      : setMenuToggle(MenuOpen);
  };

  return (
    <header>
      <div className="header">
        <Logo />
        <img
          className="toggle-button"
          src={menuToggle}
          alt="menuOpen"
          onClick={handleMenuToggle}
        />
        <nav className={menuToggle === MenuOpen ? "" : "active"}>
          <ul>
            <li>
              <CustomLink to="/" onClick={handleMenuToggle}>Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/projects" onClick={handleMenuToggle}>Projects</CustomLink>
            </li>
            <li>
              <CustomLink to="/about" onClick={handleMenuToggle}>About</CustomLink>
            </li>
            <li>
              <CustomLink to="/contact" onClick={handleMenuToggle}>Contact</CustomLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link to={to} className={isActive ? "active-link" : ""} {...props}>
      {children}
    </Link>
  );
}

export default Navbar;
