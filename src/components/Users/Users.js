import React from "react";
import User from "./User/User";

const Users = ({ users }) => {
  return users.map(user => (
    <User avatar={user.avatar} name={user.name} email={user.email} key={user.email}/>
  ));
};

export default Users;
