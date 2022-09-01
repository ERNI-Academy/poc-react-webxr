import React from "react";
import Mole3D from "./Mole3D";

const MoleList3D = () => {
  return (
    <group>
      <Mole3D
        id={0}
        position={[-0.28, 0.05, -0.26]}
        scale={[0.18, 0.18, 0.18]}
      />
      <Mole3D id={1} position={[0, 0.05, -0.26]} scale={[0.18, 0.18, 0.18]} />
      <Mole3D
        id={2}
        position={[0.28, 0.05, -0.26]}
        scale={[0.18, 0.18, 0.18]}
      />

      <Mole3D
        id={3}
        position={[-0.28, 0.05, 0.01]}
        scale={[0.18, 0.18, 0.18]}
      />
      <Mole3D id={4} position={[0, 0.05, 0.01]} scale={[0.18, 0.18, 0.18]} />
      <Mole3D id={5} position={[0.28, 0.05, 0.01]} scale={[0.18, 0.18, 0.18]} />

      <Mole3D
        id={7}
        position={[-0.28, 0.05, 0.27]}
        scale={[0.18, 0.18, 0.18]}
      />
      <Mole3D id={8} position={[0.0, 0.05, 0.28]} scale={[0.18, 0.18, 0.18]} />
      <Mole3D id={6} position={[0.26, 0.05, 0.28]} scale={[0.18, 0.18, 0.18]} />
    </group>
  );
};

export default MoleList3D;
