import { Plane, useTexture } from "@react-three/drei";

const Logo3D = () => {
  const texture = useTexture("/logo.png");
  return (
    <Plane position={[0, 0.89, -0.45]} args={[1.2, 0.6]}>
      <meshStandardMaterial map={texture} />
    </Plane>
  );
};

export default Logo3D;
