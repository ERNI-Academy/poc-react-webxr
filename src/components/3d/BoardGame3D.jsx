import React, { useLayoutEffect } from "react";
import { applyProps } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const BoardGame3D = (props) => {
  const { scene } = useGLTF("/game-board.gltf");
  return (
    <primitive
      scale={[0.8, 0.8, 0.8]}
      position={[0, 0.5, 0]}
      object={scene}
      {...props}
    />
  );
};
useGLTF.preload("/game-board.gltf");

export default BoardGame3D;
