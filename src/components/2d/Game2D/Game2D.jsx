import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useGameManager } from "../../../contexts/gameManager";
import BoardGame2D from "../BoardGame2D/BoardGame2D";
import Label2D from "../Label2D/Label2D";

import styles from "./Game2D.module.css";

const Game2D = () => {
  const { points, timeLeft, startGame, gameReady, endGame } = useGameManager();
  const router = useRouter();

  useEffect(() => {
    startGame();
  }, [startGame]);

  useEffect(() => {
    if (!gameReady && timeLeft == 0) {
      endGame();
      router.push("/game-result");
    }
  }, [endGame, gameReady, router, timeLeft]);

  return (
    <div className={styles.game2d}>
      <div className={styles.info}>
        <Label2D label="Score" value={points} />
        <Label2D label="Time" value={timeLeft} align="right" />
      </div>
      <BoardGame2D />
    </div>
  );
};

export default Game2D;
