import React from "react";
import Mole2D from "../Mole2D/Mole2D";
import styles from "./BoardGame2D.module.css";

const BoardGame2D = () => {
  return (
    <div className={styles.board}>
      <div className={styles.row}>
        <Mole2D id={0} />
        <Mole2D id={1} />
        <Mole2D id={2} />
      </div>
      <div className={styles.row}>
        <Mole2D id={3} />
        <Mole2D id={4} />
        <Mole2D id={5} />
      </div>
      <div className={styles.row}>
        <Mole2D id={6} />
        <Mole2D id={7} />
        <Mole2D id={8} />
      </div>
    </div>
  );
};

export default BoardGame2D;
