import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

interface State {
  id: string;
  isResumed: boolean;
  isEmptyChat: boolean;
  changeChatStatus: (status: boolean) => void;
  regenerateId: () => void;
  changeId: (id: string) => void;
  startResuming: () => void;
  stopResuming: () => void;
}

export const useStore = create<State>((set) => ({
  id: uuidv4(),
  isResumed: false,
  isEmptyChat: true,
  changeChatStatus: (status: boolean) => set({ isEmptyChat: status }),
  regenerateId: () => set({ id: uuidv4() }),
  changeId: (id: string) => set({ id }),
  startResuming: () => set({ isResumed: true }),
  stopResuming: () => set({ isResumed: false })
}));
