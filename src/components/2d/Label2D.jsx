import React from "react";

const Label2D = ({ label, value, align }) => {
  return (
    <div className={`container ${align && "container-" + align} || ''`}>
      <span className="label">{label}</span>
      <span className="value">{value}</span>
      <style jsx>{`
        .container {
          display: flex;
          flex-flow: column nowrap;
          align-items: flex-start;
        }
        .container-right {
          align-items: flex-end;
        }
        .container-center {
          align-items: center;
        }
        .label {
          font-size: 32px;
          font-weight: bold;
          color: #22cbff;
          text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
            1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
        }
        .value {
          font-size: 64px;
          font-weight: bold;
          color: #fb666e;
          text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
            1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
        }

        .big {
          font-size: 42px;
        }
      `}</style>
    </div>
  );
};

export default Label2D;
