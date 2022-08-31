import React, { useState, useEffect, Fragment } from "react";
import { Hands } from "@react-three/xr";
import { useThree, useFrame } from "@react-three/fiber";
import { usePlane, useBox, Physics, useSphere } from "@react-three/cannon";
import {
  Box,
  OrbitControls,
  Plane,
  Sphere,
  Sky,
  useMatcapTexture,
} from "@react-three/drei";

export const joints = [
  "wrist",
  "thumb-metacarpal",
  "thumb-phalanx-proximal",
  "thumb-phalanx-distal",
  "thumb-tip",
  "index-finger-metacarpal",
  "index-finger-phalanx-proximal",
  "index-finger-phalanx-intermediate",
  "index-finger-phalanx-distal",
  "index-finger-tip",
  "middle-finger-metacarpal",
  "middle-finger-phalanx-proximal",
  "middle-finger-phalanx-intermediate",
  "middle-finger-phalanx-distal",
  "middle-finger-tip",
  "ring-finger-metacarpal",
  "ring-finger-phalanx-proximal",
  "ring-finger-phalanx-intermediate",
  "ring-finger-phalanx-distal",
  "ring-finger-tip",
  "pinky-finger-metacarpal",
  "pinky-finger-phalanx-proximal",
  "pinky-finger-phalanx-intermediate",
  "pinky-finger-phalanx-distal",
  "pinky-finger-tip",
];

const JointCollider = ({ index, hand }) => {
  const { gl } = useThree();
  const handObj = gl.xr.getHand(hand);
  const joint = handObj.joints[joints[index]];
  console.log({ joint });
  const size = joint.jointRadius || 0.0001;
  console.log({ size });
  const [tipRef, api] = useSphere(() => ({
    args: [size],
    position: [-1, 0, 0],
  }));

  useFrame(() => {
    if (joint === undefined) return;
    api.position.set(joint.position.x, joint.position.y, joint.position.z);
  });

  return (
    <Sphere ref={tipRef} args={[size]}>
      <meshBasicMaterial transparent opacity={0} attach="material" />
    </Sphere>
  );
};

const HandsReady = (props) => {
  const [ready, setReady] = useState(false);
  const { gl } = useThree();
  useEffect(() => {
    if (ready) return;
    const joint = gl.xr.getHand(0).joints["index-finger-tip"];
    if (joint?.jointRadius !== undefined) return;
    const id = setInterval(() => {
      const joint = gl.xr.getHand(0).joints["index-finger-tip"];
      if (joint?.jointRadius !== undefined) {
        setReady(true);
      }
    }, 500);
    return () => clearInterval(id);
  }, [gl, ready]);

  return ready ? props.children : null;
};

const HandsColliders = () =>
  [...Array(25)].map((_, i) => (
    <Fragment key={i}>
      <JointCollider index={i} hand={0} />
      <JointCollider index={i} hand={1} />
    </Fragment>
  ));

const Hands3D = ({ children }) => {
  return (
    <>
      <Hands />
      <HandsReady>
        <HandsColliders />
      </HandsReady>
    </>
  );
};

export default Hands3D;
