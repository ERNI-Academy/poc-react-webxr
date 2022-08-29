import Head from "next/head";
import Button from "../components/common/Button/Button";
import Logo from "../components/common/Logo/Logo";
import Container from "../components/common/Container/Container";
import HighScore from "../components/high-score/HighScore";
import { useRouter } from "next/router";
import MainLayout from "../components/layouts/MainLayout";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>ERNI Racoon Invasion - React WebXR PoC</title>
        <meta name="description" content="React WebXR PoC by ERNI" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="prefetch" href="/grass-tile.png" />
        <link rel="prefetch" href="/racoon-grass-tile.png" />
      </Head>

      <MainLayout>
        <div>
          <p>Text to explain the PoC and the Game, put more text whatever...</p>
          <p>
            Put more Text or some links, like{" "}
            <a href="https://google.com">linkedin</a> or put other content
          </p>
          <p>More text..</p>
        </div>

        <div className="start-game-button">
          <Button onClick={() => router.push("/game")} animate>
            New game
          </Button>
        </div>

        <div className="high-scores">
          <HighScore />
        </div>
      </MainLayout>
      <style jsx>{`
        .start-game-button,
        .save-score-button,
        .high-scores {
          margin-top: 32px;
        }
      `}</style>
    </div>
  );
}
