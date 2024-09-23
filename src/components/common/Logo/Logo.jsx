import React from "react";
import styles from "./Logo.module.css";
import { useGameStore } from "../../../stores/gameStore";
import shallow from "zustand/shallow";

const Logo = () => {
    const { score, maxScore } = useGameStore(
        (state) => ({
            score: state.score,
            maxScore: state.maxScore
        }),
        shallow
    );

    return (
        <div className={styles.logo}>
            {(score === maxScore) ? (
                <div className="logo-container">
                    <img className="challenge-image" alt="Mole attack, join.erni" />
                    <img className="play-to-win" src="/playtoWin.png" alt="Play to Win" />
                </div>
            ) : (
                <div className="logo-container">
                    <img src="/logo.png" alt="Mole attack, join.erni" />
                    <img className="play-to-win" src="/playtowin.png" alt="Play to Win" />
                </div>
            )}
            <style jsx>{`
                .challenge-image {
                    background: no-repeat center/100% url("/erni-rocks.png");
                    height: 200px;
                }
                .logo-container {
                    position: relative;
                    display: inline-block;
                }
                .play-to-win {
                    position: absolute;
                    bottom: -10px; /* Ajusta este valor según sea necesario */
                    right: -10px; /* Ajusta este valor según sea necesario */
                    width: 200px; /* Ajusta el tamaño según sea necesario */
                    height: auto;
                }
            `}</style>
        </div>
    );
};

export default Logo;