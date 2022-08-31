import create from "zustand";

const useGameStore = create((set, get) => ({
  gameStarted: false,
  activeMoleIndex: -1,
  round: 0,
  points: 0,
  time: 0,
  timeLeft: Math.floor(60000 / 1000),
  timeoutId: null,
  hit: () => {
    const gameStarted = get().gameStarted;
    console.log("loveFromHit!! ", get());
    if (gameStarted) {
      set((state) => ({ points: state.points + 10 }));
      get().nextRound();
    }
  },
  startGame: () => {
    set((state) => ({
      points: 0,
      round: 0,
      time: 0,
      gameStarted: true,
      timeLeft: Math.floor(60000 / 1000), // Total time
    }));
    get().updateTimeLeft();
    get().nextRound();
  },
  nextRound: () => {
    const timeoutId = get().timeoutId;
    let nextTimeoutId = null;
    if (timeoutId) clearTimeout(timeoutId);
    if (get().timeLeft > 2) {
      nextTimeoutId = setTimeout(get().nextRound, 2000);
    }
    const nextMoleIndex = Math.floor(Math.random() * (8 - 0 + 1)); // Max - Min
    set((state) => ({
      activeMoleIndex: nextMoleIndex,
      round: state.round + 1,
      time: 2000, //Round Time
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
