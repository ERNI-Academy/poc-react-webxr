import { RoundedBox, Text } from "@react-three/drei";
import { Interactive } from "@react-three/xr";

const Button3D = ({ onInteraction, children }) => {
  return (
    <group>
      <Interactive
        onMove={(event) => {
          if (event?.intersection?.distance < 0.05) {
            onInteraction();
          }
        }}
      >
        <group onPointerOver={() => onInteraction()}>
          <Text position={[0, 1, 0.06]} color={"#000"}>
            {children}
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
  );
};

export default Button3D;
