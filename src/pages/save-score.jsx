import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../components/common/Button/Button";
import MainLayout from "../components/layouts/MainLayout";
import { useGameManager } from "../contexts/gameManager";
import { scoreService } from "../services/scoreService";

const SaveScorePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { points } = useGameManager();
  const router = useRouter();
  return (
    <MainLayout>
      <div>
        <p>
          Text to put here, with <a href="#">Terms and Conditions</a> and
          blablabla.
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
                //show error
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
