import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export const Navbar = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = e => {
    e.preventDefault();
    auth.logout();
    history.push("/");
  };

  return (
    
    <nav className="navbar yellow darken-4">
      <div className="nav-wrapper">
        <span className="brand-logo">Сокращатель ссылок</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">Создать</NavLink>
          </li>
          <li>
            <NavLink to="/links">Ссылки</NavLink>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>
              Выйти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
