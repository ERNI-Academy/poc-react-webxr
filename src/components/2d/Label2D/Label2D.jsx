import React from "react";
import styles from "./Label2D.module.css";

const Label2D = ({ label, value, align }) => {
  return (
    <div
      className={`${styles.container} ${align && styles["container-" + align]}`}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export default Label2D;
