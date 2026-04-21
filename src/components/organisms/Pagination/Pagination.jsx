import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePageAc } from "../../../store/reducers/usersReducer";

export function Pagination() {
  const { totalCount } = useSelector((state) => state.usersData);
  const dispatch = useDispatch();

  const pageCount = Math.ceil(totalCount / 100);
  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  const changePage = (page) => {
    dispatch(changePageAc(page));
  };

  return (
    <div>
      {pages?.map((page) => (
        <button onClick={() => changePage(page)} key={page}>{page}</button>
      ))}
    </div>
  );
}
