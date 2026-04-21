import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../../../store/reducers/usersReducer";
import { UsersContainer } from "../../organisms/UsersContainer/UsersContainer";
import { Pagination } from "../../organisms/Pagination/Pagination";

export default function Users() {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.usersData);

  useEffect(() => {
    dispatch(getUsersThunk(page));
  }, [page]);

  return (
    <div>
      <Pagination />
      <UsersContainer />
    </div>
  );
}
