import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(persist((set) => ({
    username: '',
    password: '',
    isAuthenticated: false,
    theme: 'light',

    login: (username, password) => set({
        username,
        password,
        isAuthenticated: true
    }),

    logout: () => set({
        username: '',
        password: '',
        isAuthenticated: false
    }),
    toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
})));

export default useStore;
