import create from 'zustand'

export const useAuth = create((set) => ({
  auth: JSON.parse(localStorage.getItem('auth')),
  setAuth: (auth) => set({ auth }),
}))
