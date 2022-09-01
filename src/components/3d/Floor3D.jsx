import React from "react";
import * as THREE from "three";
import "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Floor3D = () => {
  const texture = useTexture("/floor-texture.png", (txture) => {
    txture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    txture.offset.set(1, 1);
    txture.repeat.set(5, 5);
  });
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[40, 40]} />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
};

export default Floor3D;
