import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { OrbitControls, Environment, Box, Plane } from "@react-three/drei";
import BoardGame3D from "./BoardGame3D";
import { VRButton, XR, Hands } from "@react-three/xr";
import Player3D from "./Player3D";
import { useGameStore } from "../../stores/gameStore";
import shallow from "zustand/shallow";
import Scores3D from "./Scores3D";
import Floor3D from "./Floor3D";
import MoleList3D from "./MoleList3D";
import Button3D from "./Button3D";
import GameController3D from "./GameController3D";
import { useRouter } from "next/router";
import Logo3D from "./Logo3D";
import Background3D from "./Background3D";

const VR_SESSION_FEATURES = [
  "local-floor",
  "bounded-floor",
  "hand-tracking",
  "layers",
];

const Game3D = () => {
  const [isGameInit, gameInit] = useState(false);
  const { startGame, gameStarted } = useGameStore(
    (state) => ({
      startGame: state.startGame,
      gameStarted: state.gameStarted,
    }),
    shallow
  );

  const router = useRouter();

  const initGame = () => {
    if (!gameStarted) {
      gameInit(true);
      startGame();
    }
  };

  const onGameEnd = () => {
    router.push("/game-result");
    gameInit(false);
  };

  return (
    <div>
      <VRButton
        sessionInit={{
          optionalFeatures: VR_SESSION_FEATURES,
        }}
      >
        Enter VR
      </VRButton>
      <Canvas shadows camera={{ position: [8, 1.5, 8], fov: 25 }}>
        <XR>
          <GameController3D isGameInit={isGameInit} onGameEnd={onGameEnd} />
          <Player3D />
          <Suspense fallback={null}>
            <Background3D />
            <Floor3D />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls autoRotate={false} />
            <Environment preset="city" />
            <Hands />
            <group
              visible={gameStarted}
              rotation={[0.3, 0, 0]}
              position={[0, 0.5, 0]}
            >
              <Logo3D />
              <MoleList3D />
              <BoardGame3D />
              <Scores3D />
            </group>
            {!gameStarted && (
              <Button3D onInteraction={() => initGame()}>
                Touch to start
              </Button3D>
            )}
          </Suspense>
        </XR>
      </Canvas>
      <style jsx>{`
        div {
          height: 600px;
          background: black;
        }
      `}</style>
    </div>
  );
};

export default Game3D;
