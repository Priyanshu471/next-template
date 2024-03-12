import { create } from "zustand";
interface StepState {
  step: number;
  setStep: (step: number) => void;
}
const useStep = create<StepState>((set) => ({
  step: 1,
  setStep: (step: number) => set({ step }),
}));

export default useStep;
