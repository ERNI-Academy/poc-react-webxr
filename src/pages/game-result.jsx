import React, { useEffect, useState } from "react";
import Button from "../components/common/Button/Button";
import Label2D from "../components/2d/Label2D/Label2D";
import { useGameManager } from "../contexts/gameManager";
import { useRouter } from "next/router";
import MainLayout from "../components/layouts/MainLayout";
import { scoreService } from "../services/scoreService";

const GameResultPage = () => {
  const { points } = useGameManager();
  const router = useRouter();
  const [position, setPosition] = useState("N/A");
  useEffect(() => {
    const getPosition = async () => {
      const pos = await scoreService.getPosition(points);
      setPosition(`${pos}`);
    };
    points && getPosition();
  }, [points]);
  return (
    <MainLayout>
      <div>
        <Label2D label="Final Score" value={points} align="center" />
        {points > 0 && (
          <Label2D label="Position" value={`#${position}`} align="center" />
        )}
        {points > 0 && (
          <div className="save-score-button">
            <Button onClick={() => router.push("/save-score")}>
              Save Score
            </Button>
          </div>
        )}
        <div className="go-back-button">
          <Button onClick={() => router.push("/")}>Go back</Button>
        </div>
      </div>
      <style jsx>{`
        .save-score-button,
        .go-back-button {
          margin-top: 32px;
        }
      `}</style>
    </MainLayout>
  );
};

export default GameResultPage;
