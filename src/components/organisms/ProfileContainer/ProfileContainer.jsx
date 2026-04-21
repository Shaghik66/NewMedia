import profilePic from "../../../shared/assets/images/profile.png";
import style from "./ProfileContainer.module.css";

import React from "react";

export function ProfileContainer({ profile }) {
  return (
    <div className={style.profileContainer}>
      <img
        src={profile?.profile?.photos?.large ? profile?.profile.photos?.large : profilePic}
        alt=""
      />
    </div>
  );
}
