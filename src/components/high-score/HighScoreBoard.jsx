import React from "react";
import styles from "./HighScoreBoard.module.css";

const HighScoreBoard = ({ scores = [] }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Score</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {scores.map((score, index) => (
          <tr key={index}>
            <td>#{index + 1}</td>
            <td>{score.score}</td>
            <td>{score.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HighScoreBoard;
