import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../../store/reducers/profileReducer";
import { ProfileContainer } from "../../organisms/ProfileContainer/ProfileContainer";

export function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profileData);
  const { id } = useParams();

  useEffect(() => {
    dispatch(profileThunk(id));
  }, []);

  return <ProfileContainer profile={profile} />;
}
