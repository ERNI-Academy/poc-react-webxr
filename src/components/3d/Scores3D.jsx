import { Text } from "@react-three/drei";
import { useGameStore } from "../../stores/gameStore";
import shallow from "zustand/shallow";

const Scores3D = () => {
  const { timeLeft, points } = useGameStore(
    (state) => ({
      timeLeft: state.timeLeft,
      points: state.points,
    }),
    shallow
  );

  return (
    <group>
      <Text
        position={[-1.1, 1, -0.4]}
        scale={[2, 2, 2]}
        rotation={[-0.3, 0.6, 0]}
      >
        Points: {points}
        <meshNormalMaterial />
      </Text>
      <Text
        position={[1, 1, -0.4]}
        scale={[2, 2, 2]}
        rotation={[-0.3, -0.6, 0]}
      >
        Time: {timeLeft}
        <meshNormalMaterial />
      </Text>
    </group>
  );
};

export default Scores3D;
