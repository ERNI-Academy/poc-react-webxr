import React from "react";
import Mole2D from "./Mole2D";

const BoardGame2D = () => {
  return (
    <div className="board">
      <div className="row">
        <Mole2D id={0} />
        <Mole2D id={1} />
        <Mole2D id={2} />
      </div>
      <div className="row">
        <Mole2D id={3} />
        <Mole2D id={4} />
        <Mole2D id={5} />
      </div>
      <div className="row">
        <Mole2D id={6} />
        <Mole2D id={7} />
        <Mole2D id={8} />
      </div>
      <style jsx>{`
        .board {
          width: 100%;
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          padding: 12px;
        }
        .row {
          display: flex;
          flex-flow: row no-wrap;
          width: 100%;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default BoardGame2D;
