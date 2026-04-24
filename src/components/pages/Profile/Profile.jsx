import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  profileThunk,
  changeProfileThunk,
} from "../../../store/reducers/profileReducer";
import { ProfileContainer } from "../../organisms/ProfileContainer/ProfileContainer";

export function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profileData);
  const { id } = useParams();

  const user = localStorage.getItem("userId");
  const isLogin = user === id;

  const changeProfile = (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("file", file);
    dispatch(changeProfileThunk(formData));
  };

  useEffect(() => {
    dispatch(profileThunk(id));
  }, []);

  return (
    <ProfileContainer
      profile={profile}
      isLogin={isLogin}
      changeProfile={changeProfile}
    />
  );
}
