import React, { useState, useEffect } from "react";
import { scoreService } from "../../services/scoreService";
import Title from "../common/Title/Title";

import styles from "./HighScore.module.css";
import HighScoreBoard from "./HighScoreBoard";

const HighScore = () => {
  const [scores, setScores] = useState([]);
  useEffect(() => {
    const getScores = async () => {
      const scores = await scoreService.getScores();
      setScores(scores);
    };
    getScores();
  }, []);
  return (
    <div className={styles.container}>
      <Title>Simulator scores</Title>
      <HighScoreBoard scores={scores} />
    </div>
  );
};

export default HighScore;
