import React, { useState } from "react";
import Game2D from "../components/2d/Game2D/Game2D";
import MainLayout from "../components/layouts/MainLayout";

const GamePage = () => {
  const [vrMode, setVrMode] = useState(false);
  return (
    <MainLayout>
      <div>{vrMode ? <span>Not Implemented</span> : <Game2D />}</div>
    </MainLayout>
  );
};

export default GamePage;
