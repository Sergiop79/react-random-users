import React from "react";

const User = ({avatar, name, email}) => (
  <div className="User">
    <img src={avatar} alt={name} />
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>
);

export default User;