import { useXR } from "@react-three/xr";
import { useEffect } from "react";

const Player3D = ({}) => {
  const { player } = useXR();
  useEffect(() => {
    player.position.x = 0;
    player.position.y = 0;
    player.position.z = 0.8;
  }, [player]);
  return <></>;
};

export default Player3D;
