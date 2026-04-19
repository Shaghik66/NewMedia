import React from "react";
import { useSelector } from "react-redux";
import { UsersCard } from "../../molecules/UsersCard/UsersCard";

import style from "./UsersContainer.module.css";

export function UsersContainer() {
  const users = useSelector((state) => state.usersData);

  return (
    <div>
      {users.isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={style.usersContainer}>
          {users.users?.map((user) => {
            return <UsersCard user={user} key={user.id}/>;
          })}
        </div>
      )}
      
    </div>
  );
}
