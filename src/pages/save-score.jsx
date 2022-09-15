import { useRouter } from "next/router";
import React, { useState } from "react";
import shallow from "zustand/shallow";
import Button from "../components/common/Button/Button";
import MainLayout from "../components/layouts/MainLayout";
import { scoreService } from "../services/scoreService";
import { useGameStore } from "../stores/gameStore";

const SaveScorePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { points } = useGameStore(
    (state) => ({
      points: state.points,
    }),
    shallow
  );

  const router = useRouter();
  return (
    <MainLayout>
      <div>
        <p>
          I agree with ERNI’s <a href="https://www.betterask.erni/gtc-privacy-policy/" target="_blank" rel="noreferrer">privacy policy and QCS</a>.
        </p>
        <p>Name</p>
        <input
          maxLength={8}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Joe Doe"
        />
        <p>Email (optional)</p>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="joe@doe.com"
        />
        <div className="send-score-button">
          <Button
            onClick={async () => {
              const { error } = await scoreService.insertScore({
                email,
                name,
                score: points,
              });
              if (!error) {
                router.push("/?save_score=true");
              } else {
                //TODO: show error
              }
            }}
            disabled={!name || !points}
          >
            Send Score
          </Button>
        </div>
      </div>
      <style jsx>{`
        input {
          width: 100%;
          height: 42px;
          padding: 0 12px;
        }
        .send-score-button {
          margin-top: 32px;
        }
      `}</style>
    </MainLayout>
  );
};

export default SaveScorePage;
