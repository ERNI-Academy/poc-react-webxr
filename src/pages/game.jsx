import React, { useState } from "react";
import Game2D from "../components/2d/Game2D";
import Game3D from "../components/3d/Game3D";
import MainLayout from "../components/layouts/MainLayout";
import useVR from "../hooks/useVR";

const GamePage = () => {
  const { supported: vrMode } = useVR();
  return (
    <MainLayout>
      <div>{vrMode ? <Game3D /> : <Game2D />}</div>
    </MainLayout>
  );
};

export default GamePage;
