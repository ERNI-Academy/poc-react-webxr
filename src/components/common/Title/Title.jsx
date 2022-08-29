import React from "react";

import styles from "./Title.module.css";

const Title = ({ children }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{children}</h1>
    </div>
  );
};

export default Title;
