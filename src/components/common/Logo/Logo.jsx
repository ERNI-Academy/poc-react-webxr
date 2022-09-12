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
      {(score === maxScore) ?
        <img className="challenge-image" alt="Mole attack, join.erni"/> :
        <img src="/logo.png" alt="Mole attack, join.erni"/>
      }
      <style jsx>{`
        .challenge-image {
          background: no-repeat center/100% url("/erni-rocks.png");
          height: 200px;
        }
      `}</style>
    </div>
  );
};

export default Logo;
