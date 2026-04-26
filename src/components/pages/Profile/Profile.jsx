import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  profileThunk,
  changeProfileThunk,
  setStatusThunk,
} from "../../../store/reducers/profileReducer";

import { ProfileContainer } from "../../organisms/ProfileContainer/ProfileContainer";

export function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profileData);
  const { id } = useParams();
  const [status, setStatus] = useState("");

  const user = localStorage.getItem("userId");
  const isLogin = user === id;

  const changeProfile = (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("file", file);
    dispatch(changeProfileThunk(formData));
  };

  const setNewStatus = (e) => {
    setStatus(e.target.value);
  };

  const onBlur = () => {
    dispatch(setStatusThunk({ status }));
  };

  useEffect(() => {
    dispatch(profileThunk(id));
  }, []);

  return (
    <ProfileContainer
      profile={profile}
      isLogin={isLogin}
      changeProfile={changeProfile}
      setNewStatus={setNewStatus}
      status={status}
      onBlur={onBlur}
    />
  );
}
