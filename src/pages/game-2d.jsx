import React from "react";
import Head from "next/head";
import Game2D from "../components/2d/Game2D";
import MainLayout from "../components/layouts/MainLayout";

const Game2DPage = () => {
  return (
    <MainLayout>
      <Head>
        <link rel="prefetch" href="/wood-tile.png" />
        <link rel="prefetch" href="/mole-wood-tile.png" />
      </Head>
      <Game2D />
    </MainLayout>
  );
};

export default Game2DPage;
