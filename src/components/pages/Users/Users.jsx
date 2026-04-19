import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsersThunk } from "../../../store/reducers/usersReducer";
// import { socialAPI } from "../../../api/api";
import { UsersContainer } from "../../organisms/UsersContainer/UsersContainer";

export default function Users() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk())
    // socialAPI.getAllUsers(dispatch);
  }, []);

  return (
    <div>
      <UsersContainer />
    </div>
  );
}
