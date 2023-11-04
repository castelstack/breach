import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type State = {
  isLoggedIn: boolean;
  userId: string;
  category: string;
  topPick: {
    id: string;
    title: string;
    content: string;
    loading: true;
    imageUrl: string;
  };
}

type Action = {
  setUserId: (id: State['userId']) => void;
  setCategory: (id: string) => void;
  setTopPick: (pick: State['topPick']) => void;
}

export const useUserStore = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        userId: '',
        category: '',
        isLoggedIn: false,
        topPick: {
          id: '',
          title: '',
          content: '',
          loading: true,
          imageUrl: ''
        },
        setUserId: (id) => set(() => ({ userId: id, isLoggedIn: true })),
        setCategory: (id) => set(() => ({ category: id })),
        setTopPick: (pick: State['topPick']) => set(() => ({ topPick: {...pick} })),
      }),
      { name: 'userStore' }
    )
  )
);
