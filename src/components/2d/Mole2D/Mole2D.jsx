import React, { useCallback, useEffect, useState } from "react";
import { useGameManager } from "../../../contexts/gameManager";
import styles from "./Mole2D.module.css";

const Mole2D = ({ id }) => {
  const { activeMoleIndex, hit, config } = useGameManager();
  const [showScore, setShowScore] = useState(false);
  const isActiveMole = activeMoleIndex === id;
  useEffect(() => {
    if (showScore) {
      setTimeout(() => {
        setShowScore(false);
      }, 200);
    }
  }, [showScore, setShowScore]);
  return (
    <div className={styles.container}>
      <div
        className={`${styles.mole} ${isActiveMole && styles["mole-active"]}`}
        onClick={() => {
          if (isActiveMole) {
            hit();
            setShowScore(true);
          }
        }}
      >
        <span className={`${styles.points} ${showScore && styles.show}`}>
          +{config.pointsHit}
        </span>
      </div>
    </div>
  );
};

export default Mole2D;
