import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Interactive } from "@react-three/xr";
import { useFrame } from "@react-three/fiber";
import { useGameStore } from "../../stores/gameStore";

const Mole3D = ({ id, position, ...props }) => {
  const { nodes, materials } = useGLTF("/mole.gltf");
  const ref = useRef(null);

  useFrame(() => {
    const isActive = useGameStore.getState().activeMoleIndex === id;
    ref.current.position.y = isActive ? 0.2 : position[1];
    if (ref.current.doHit) {
      if (isActive) {
        useGameStore.getState().hit();
      }
      ref.current.doHit = false;
    }
  });

  const onInteractive = (e) => {
    if (e?.intersection?.distance < 0.05) {
      ref.current.doHit = true;
    }
  };

  return (
    <Interactive onMove={onInteractive}>
      <group {...props} position={position} dispose={null} ref={ref}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={nodes.Mesh.geometry}
            material={materials["Mat.006"]}
          />
          <mesh geometry={nodes.Mesh_1.geometry} material={materials.Mat} />
          <mesh
            geometry={nodes.Mesh_2.geometry}
            material={materials["Mat.009"]}
          />
          <mesh
            geometry={nodes.Mesh_3.geometry}
            material={materials["Mat.010"]}
          />
        </group>
      </group>
    </Interactive>
  );
};

export default Mole3D;
useGLTF.preload("/mole.gltf");
