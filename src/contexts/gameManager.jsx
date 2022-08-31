import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

export const GameManagerContext = createContext({
  activeMoleIndex: -1,
  round: 0,
  points: 0,
  timeLeft: 60,
  firstGame: true,
  config: {
    pointsHit: 10,
    gameTime: 60000,
  },
});

export const useGameManager = () => useContext(GameManagerContext);

export const GameManagerProvider = ({ children, options }) => {
  const config = {
    roundTime: 2000,
    gameTime: 60000,
    pointsHit: 10,
    ...options,
  };
  const [gameStarted, setGameStarted] = useState(false);
  const [activeMoleIndex, setActiveMoleIndex] = useState(-1);
  const [round, setRound] = useState(0);
  const [points, setPoints] = useState(0);
  const [time, setTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(Math.floor(config.gameTime / 1000));
  const [firstGame, setFirstGame] = useState(true);
  const [gameReady, setGameReady] = useState(true);

  const hit = useCallback(() => {
    if (gameStarted) {
      setPoints(points + config.pointsHit);
      setTime(0);
    }
  }, [config.pointsHit, gameStarted, points]);

  const startGame = useCallback(() => {
    setPoints(0);
    setRound(0);
    setTime(0);
    setGameStarted(true);
    setFirstGame(false);
    setGameReady(false);
    setTimeLeft(Math.floor(config.gameTime / 1000));
    console.log("startGame Called");
  }, [config.gameTime]);

  const endGame = useCallback(() => {
    setGameReady(true);
  }, []);

  useEffect(() => {
    if (gameStarted) {
      let roundTimer = setTimeout(() => {
        const nextMoleIndex = Math.floor(Math.random() * 4);
        setActiveMoleIndex(nextMoleIndex);
        setRound(round + 1);
        setTime(config.roundTime);
      }, time);

      return () => {
        clearTimeout(roundTimer);
      };
    }
  }, [time, gameStarted, config.roundTime, round]);

  useEffect(() => {
    if (gameStarted) {
      let gameTimer = setTimeout(() => {
        setGameStarted(false);
        setTimeLeft(0);
      }, config.gameTime);

      return () => {
        clearTimeout(gameTimer);
      };
    }
  }, [config.gameTime, gameStarted]);

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timeLeftTimer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => {
        clearTimeout(timeLeftTimer);
      };
    }
  }, [config.gameTime, gameStarted, timeLeft]);

  return (
    <GameManagerContext.Provider
      value={{
        gameStarted,
        activeMoleIndex,
        round,
        points,
        time,
        hit,
        startGame,
        endGame,
        config,
        timeLeft,
        firstGame,
        gameReady,
      }}
    >
      {children}
    </GameManagerContext.Provider>
  );
};
