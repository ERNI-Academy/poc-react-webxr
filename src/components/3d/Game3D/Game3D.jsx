import { Canvas, useThree, useFrame } from "@react-three/fiber";
import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Box,
  Sky,
  OrbitControls,
  Environment,
  Text3D,
  Text,
  RoundedBox,
} from "@react-three/drei";
import BoardGame3D from "../BoardGame3D/BoardGame3D";
import Mole3D from "../Mole3D/Mole3D";
import { VRButton, XR, Hands, Interactive } from "@react-three/xr";
import Player3D from "../Player3D";
import { useGameStore } from "../../../stores/gameStore";
import shallow from "zustand/shallow";
import Scores3D from "../Scores3D";

const Game3D = () => {
  const { startGame, gameStarted } = useGameStore(
    (state) => ({
      startGame: state.startGame,
      gameStarted: state.gameStarted,
    }),
    shallow
  );

  //   const { activeMoleId, timeLeft, points, startGame, hit } = useGameStore(
  //     (state) => ({
  //       activeMoleId: state.activeMoleIndex,
  //       timeLeft: state.timeLeft,
  //       points: state.points,
  //       startGame: state.startGame,
  //       hit: state.hit,
  //     }),
  //     shallow
  //   );

  return (
    <div>
      <VRButton
        sessionInit={{
          optionalFeatures: [
            "local-floor",
            "bounded-floor",
            "hand-tracking",
            "layers",
          ],
        }}
      >
        Enter VR
      </VRButton>
      <Canvas shadows camera={{ position: [8, 1.5, 8], fov: 25 }}>
        <XR>
          <Player3D />
          <Suspense fallback={null}>
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <planeBufferGeometry attach="geometry" args={[40, 40]} />
              <meshStandardMaterial attach="material" color="#666" />
            </mesh>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls autoRotate={false} />
            <Environment preset="city" />
            <Hands />

            <group visible={gameStarted}>
              <Mole3D
                id={0}
                position={[-0.34, 0.05, -0.34]}
                scale={[0.2, 0.2, 0.2]}
              />
              <Mole3D
                id={1}
                position={[0, 0.05, -0.34]}
                scale={[0.2, 0.2, 0.2]}
              />
              <Mole3D
                id={2}
                position={[0.34, 0.05, -0.34]}
                scale={[0.2, 0.2, 0.2]}
              />

              <Mole3D
                id={3}
                position={[-0.34, 0.05, 0]}
                scale={[0.2, 0.2, 0.2]}
              />
              <Mole3D id={4} position={[0, 0.05, 0]} scale={[0.2, 0.2, 0.2]} />
              <Mole3D
                id={5}
                position={[0.34, 0.05, 0]}
                scale={[0.2, 0.2, 0.2]}
              />

              <Mole3D
                id={6}
                position={[0.34, 0.05, 0.34]}
                scale={[0.2, 0.2, 0.2]}
              />
              <Mole3D
                id={7}
                position={[0, 0.05, 0.34]}
                scale={[0.2, 0.2, 0.2]}
              />
              <Mole3D
                id={8}
                position={[-0.34, 0.05, 0.34]}
                scale={[0.2, 0.2, 0.2]}
              />

              <BoardGame3D position={[0, 0.5, 0]} />
              <Scores3D />
            </group>
            {!gameStarted && (
              <group>
                <Interactive
                  onHover={(event) => {
                    if (event?.intersection?.distance < 0.05) {
                      startGame();
                    }
                  }}
                >
                  <group>
                    <Text position={[0, 1, 0.06]} color={"#000"}>
                      Start Game
                    </Text>
                    <RoundedBox
                      position={[0, 1, 0]}
                      scale={[0.7, 0.4, 0.1]}
                      color={"hotpink"}
                      radius={0.05}
                      smoothness={4}
                    >
                      <meshBasicMaterial color="hotpink" />
                    </RoundedBox>
                  </group>
                </Interactive>
              </group>
            )}
          </Suspense>
        </XR>
      </Canvas>
      <style jsx>{`
        div {
          height: 600px;
          background: goldenrod;
        }
      `}</style>
    </div>
  );
};

export default Game3D;
