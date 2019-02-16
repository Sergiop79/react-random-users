import React from "react";
import styles from "./User.module.css";


const User = ({ avatar, name, email }) => (
  <div className={styles.User}>
    <img src={avatar} alt={name} className={styles.image} />
    <div className={styles.body}>
      <h2 className={styles.name}>{name}</h2>
      <p>
        <a href={`mailto:${email}`} className={styles.email}>{email}</a>
      </p>
    </div>
  </div>
);

export default User;