import React from "react";
import * as THREE from "three";
import "@react-three/fiber";
import { Plane, useTexture } from "@react-three/drei";

const Background3D = () => {
  const texture = useTexture("/wall.png", (txture) => {
    txture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    txture.offset.set(1, 1);
    txture.repeat.set(2, 1);
  });
  return (
    <group>
      <Plane args={[20, 7]} position={[4, 2.5, -2]} rotation={[0, -1, 0]}>
        <meshStandardMaterial map={texture} />
      </Plane>
      <Plane args={[20, 7]} position={[0, 2.5, -5]} rotation={[0, 0, 0]}>
        <meshStandardMaterial map={texture} />
      </Plane>
      <Plane args={[20, 7]} position={[-4, 2.5, -2]} rotation={[0, 1, 0]}>
        <meshStandardMaterial map={texture} />
      </Plane>
    </group>
  );
};

export default Background3D;
