import { useXR } from "@react-three/xr";
import React, { useEffect } from "react";
import shallow from "zustand/shallow";
import { useGameStore } from "../../stores/gameStore";

const GameController3D = ({ isGameInit, onGameEnd }) => {
  const { gameStarted } = useGameStore(
    (state) => ({
      gameStarted: state.gameStarted,
    }),
    shallow
  );
  const { session } = useXR();

  useEffect(() => {
    const closeSessionAndGo = async () => {
      if (session !== null) {
        await session.end();
      }
      onGameEnd();
    };
    if (isGameInit && !gameStarted) {
      closeSessionAndGo();
    }
  }, [gameStarted, isGameInit, onGameEnd, session]);

  return <></>;
};

export default GameController3D;
