import { cardsData } from 'utilities/constant'
import create from 'zustand'

export const useJobs = create((set) => ({
  jobs: cardsData,
  setJobs: (jobs) => set({ jobs }),
}))
