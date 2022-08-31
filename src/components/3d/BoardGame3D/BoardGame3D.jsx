import React, { useLayoutEffect } from "react";
import { applyProps } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const BoardGame3D = (props) => {
  const { scene, materials } = useGLTF("/game-board.gltf");
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
    // applyProps(materials.default, {
    //   color: "orange",
    //   roughness: 0,
    //   "normalMap-repeat": [40, 40],
    //   normalScale: [0.05, 0.05],
    // });
  });
  return <primitive object={scene} {...props} />;
};

export default BoardGame3D;
