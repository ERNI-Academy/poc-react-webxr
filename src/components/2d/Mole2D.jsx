import React, {useEffect, useState} from "react";
import shallow from "zustand/shallow";
import { useGameStore } from "../../stores/gameStore";
import {useIdleTimer} from "react-idle-timer";

const Mole2D = ({ id }) => {
  const { activeMoleIndex, pointsPerHit, hit, updateScore, resetScore } = useGameStore(
    (state) => ({
      activeMoleIndex: state.activeMoleIndex,
      pointsPerHit: state.pointsPerHit,
      hit: state.hit,
      updateScore: state.updateScore,
      resetScore: state.resetScore,
    }),
    shallow
  );

  const onIdle = () => {
    resetScore();
  }

  const {start} = useIdleTimer({
    onIdle,
    timeout: 2000,
  })
  const [showScore, setShowScore] = useState(false);
  const isActiveMole = activeMoleIndex === id;

  useEffect(() => {
    if (showScore) {
      setTimeout(() => {
        setShowScore(false);
      }, 200);
    }
  }, [showScore, setShowScore]);
  return (
    <div className="container">
      <div
        className={`mole ${(isActiveMole && "mole-active") || ""}`}
        onClick={() => {
          if (isActiveMole) {
            hit(id);
            setShowScore(true);
          };
          updateScore(id);
          start()
        }}
      >
        <span className={`points ${(showScore && "show") || ""}`}>
          +{pointsPerHit}
        </span>
      </div>
      <style jsx>{`
        .container {
          width: 33.33333%;
          aspect-ratio: 1/1;
        }
        .mole {
          background: no-repeat center/100% url("/wood-tile.png");
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .mole-active {
          background: no-repeat center/100% url("/mole-wood-tile.png");
        }
        .points {
          font-size: 32px;
          font-weight: bold;
          color: #fb666e;
          text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
            1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
          transition: opacity 0.1s ease-out;
          opacity: 0;
        }
        .show {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Mole2D;
