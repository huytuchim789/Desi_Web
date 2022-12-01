import { dashboardData } from 'utilities/constant'
import create from 'zustand'

export const useDashboardStore = create((set) => ({
  datas: dashboardData,
  setDatas: (datas) => set({ datas }),
}))
