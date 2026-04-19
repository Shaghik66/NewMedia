import React from "react";
import { NavLink } from "react-router-dom";
import profilePic from "../../../shared/assets/images/profile.png";
import style from "./UsersCard.module.css";

export function UsersCard({ user }) {
  return (
    <div className={style.usersCardsContainer}>
      <NavLink to={`/users/${user.id}`}>
        <img
          className={style.profileImage}
          src={user.photos.large ? user.photos.large : profilePic}
          alt="Profile Picture"
        />
      </NavLink>
      <h2 className={style.userName}>{user.name}</h2>
    </div>
  );
}
