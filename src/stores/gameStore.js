import create from "zustand";

const CONFIG = {
  pointsPerHit: 20,
  totalTime: 40000,
  roundTime: 1000,
  moles: 9,
};

const useGameStore = create((set, get) => ({
  gameStarted: false,
  activeMoleIndex: -1,
  round: 0,
  points: 0,
  time: 0,
  timeLeft: Math.floor(CONFIG.totalTime / 1000),
  timeoutId: null,
  pointsPerHit: CONFIG.pointsPerHit,
  score: 0,
  maxScore: 8504340,
  hit: () => {
    const gameStarted = get().gameStarted;
    if (gameStarted) {
      set((state) => ({ points: state.points + 10 }));
      get().nextRound();
    }
  },
  updateScore: (id) => {
    set((state) => ({ score: ((state.score << 4) + id) << 2 }));
  },
  resetScore: () => {
    set(() => ({ score: 0 }));
  },
  startGame: () => {
    set(() => ({
      points: 0,
      round: 0,
      time: 0,
      gameStarted: true,
      timeLeft: Math.floor(CONFIG.totalTime / 1000), // Total time
    }));
    get().updateTimeLeft();
    get().nextRound();
  },
  nextRound: () => {
    const timeoutId = get().timeoutId;
    let nextTimeoutId = null;
    if (timeoutId) clearTimeout(timeoutId);
    if (get().timeLeft > 2) {
      nextTimeoutId = setTimeout(get().nextRound, CONFIG.roundTime);
    }
    const nextMoleIndex = Math.floor(
      Math.random() * (CONFIG.moles - 1 - 0 + 1)
    ); // Max - Min
    set((state) => ({
      activeMoleIndex: nextMoleIndex,
      round: state.round + 1,
      time: CONFIG.roundTime, //Round Time
      timeoutId: nextTimeoutId,
    }));
  },
  updateTimeLeft: () => {
    setTimeout(() => {
      if (get().timeLeft > 0) {
        get().updateTimeLeft();
        set((state) => ({ timeLeft: state.timeLeft - 1 }));
      } else {
        set((state) => ({ gameStarted: false }));
      }
    }, 1000);
  },
}));

export { useGameStore };
