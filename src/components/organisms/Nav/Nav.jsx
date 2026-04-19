import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={style.navbar}>
    <ul className={style.navList}>
      <li className={style.listItem}>
        <NavLink to="/" className={style.listLink}>Logo</NavLink>
      </li>
      <li className={style.listItem}>
        <NavLink to="/users" className={style.listLink}>Users</NavLink>
      </li>
    </ul>
    </nav>
  );
}
