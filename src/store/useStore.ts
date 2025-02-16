import { create } from "zustand";

// ストアの型定義
interface CounterState {
  count: number;
  isDarkMode: boolean;
  increment: () => void;
  reset: () => void;
  toggleDarkMode: () => void;
}

// Zustand のストアを作成
const useStore = create<CounterState>((set) => ({
  count: 0,
  isDarkMode: false,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useStore;
