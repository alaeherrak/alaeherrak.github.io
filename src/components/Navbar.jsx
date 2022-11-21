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
      <Logo />
      <img className="toggle-button" src={menuToggle} alt="menuOpen" onClick={handleMenuToggle} />
      <nav className={menuToggle === MenuOpen ? '':'active'}>
        <ul>
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/projects">Projects</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
          <li>
            <CustomLink to="/contact">Contact</CustomLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link to={to} className={isActive ? "active" : ""} {...props}>
      {children}
    </Link>
  );
}

export default Navbar;
