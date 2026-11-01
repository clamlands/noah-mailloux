import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./NavStyle.css";

export default function Nav() {
  const [burgerClass, setBurgerClass] = useState("burger-bar closed");
  const [menuClass, setMenuClass] = useState("menu");
  const [menuOpen, setMenuOpen] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!menuOpen) {
      setBurgerClass("burger-bar open");
      setMenuClass("menu open");
    } else {
      setBurgerClass("burger-bar closed");
      setMenuClass("menu");
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <Link to="/" className="noah-mailloux">
          NOAH MAILLOUX
        </Link>
        <div
          className="burger"
          onClick={() => {
            updateMenu();
          }}
        >
          <div className={burgerClass} />
          <div className={burgerClass} />
          <div className={burgerClass} />
        </div>
        <div className={menuClass}>
          <NavLink
            to="/"
            onClick={() => {
              updateMenu();
            }}
            className="nav-link teal"
          >
            HOME
          </NavLink>
          <NavLink
            to="/comedy"
            onClick={() => {
              updateMenu();
            }}
            className="nav-link blue"
          >
            COMEDY
          </NavLink>
          <NavLink
            to="/music"
            onClick={() => {
              updateMenu();
            }}
            className="nav-link purple"
          >
            MUSIC
          </NavLink>
          {/* <NavLink
            to="/dev"
            onClick={() => {
              updateMenu();
            }}
            className="nav-link green"
          >
            DEVELOPMENT
          </NavLink> */}
          <NavLink
            to="/contact"
            onClick={() => {
              updateMenu();
            }}
            className="nav-link green"
          >
            CONTACT
          </NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
}
