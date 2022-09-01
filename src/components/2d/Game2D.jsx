import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import shallow from "zustand/shallow";
import { useGameStore } from "../../stores/gameStore";
import Button from "../common/Button/Button";
import BoardGame2D from "./BoardGame2D";
import Label2D from "./Label2D";

const Game2D = () => {
  const [isGameInit, gameInit] = useState(false);
  const router = useRouter();

  const { points, timeLeft, startGame } = useGameStore(
    (state) => ({
      points: state.points,
      timeLeft: state.timeLeft,
      startGame: state.startGame,
    }),
    shallow
  );

  const initGame = () => {
    gameInit(true);
    startGame();
  };

  useEffect(() => {
    if (isGameInit && timeLeft == 0) {
      router.push("/game-result").then(() => {
        gameInit(false);
      });
    }
  }, [isGameInit, router, timeLeft]);

  return !isGameInit ? (
    <div className="start-btn">
      <Button animate onClick={() => initGame()}>
        START
      </Button>
      <style jsx>{`
        .start-btn {
          display: block;
          margin-top: 64px;
        }
      `}</style>
    </div>
  ) : (
    <div>
      <div className="info">
        <Label2D label="Score" value={points} />
        <Label2D label="Time" value={timeLeft} align="right" />
      </div>
      <BoardGame2D />
      <style jsx>{`
        .info {
          display: flex;
          flex-flow: row nowrap;
          width: 100%;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
};

export default Game2D;
