import React from "react";
import styles from "./Logo.module.css";
import {useGameStore} from "../../../stores/gameStore";
import shallow from "zustand/shallow";
const Logo = () => {
  const { score, maxScore } = useGameStore(
    (state) => ({
      score: state.score,
      maxScore: state.maxScore
    }),
    shallow
  );
  return (
    <div className={styles.logo}>
        <img src={score === maxScore ? "/erni-rocks.png" : "/logo.png"} alt="Mole attack, join.erni"/>
    </div>
  );
};

export default Logo;
