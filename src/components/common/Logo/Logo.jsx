import React from "react";
import Image from "next/image";
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
                    <div className="challenge-image">
                        <Image src="/erni-rocks.png" alt="Mole attack, join.erni" layout="fill" objectFit="cover" />
                    </div>
                    <Image className="play-to-win" src="/playtoWin.png" alt="Play to Win" width={200} height={auto} />
                </div>
            ) : (
                <div className="logo-container">
                    <Image src="/logo.png" alt="Mole attack, join.erni" width={200} height={auto} />
                    <Image className="play-to-win" src="/playtowin.png" alt="Play to Win" width={200} height={auto} />
                </div>
            )}
            <style jsx>{`
                .challenge-image {
                    position: relative;
                    width: 200px;
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
                }
            `}</style>
        </div>
    );
};

export default Logo;