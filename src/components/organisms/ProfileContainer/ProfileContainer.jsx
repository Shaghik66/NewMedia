import profilePic from "../../../shared/assets/images/profile.png";
import style from "./ProfileContainer.module.css";

import React from "react";

export function ProfileContainer({
  profile,
  isLogin,
  changeProfile,
  setNewStatus,
  status,
  onBlur,
}) {
  return (
    <div className={style.profileContainer}>
      <img
        src={
          profile?.profile?.photos?.large
            ? profile?.profile.photos?.large
            : profilePic
        }
        alt=""
      />
      {isLogin && <input type="file" onChange={changeProfile} />}
      {isLogin && (
        <>
          <input type="text" value={status} onChange={setNewStatus} />
          <button type="submit" onClick={onBlur}></button>
        </>
      )}
    </div>
  );
}
