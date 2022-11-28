import create from "zustand";

export const useJobDetailStore = create((set) => ({
  file: null,
  setFile: (file) => set({ file }),
  status: 0,
  setStatus: (status) => set({ status }),
}));
