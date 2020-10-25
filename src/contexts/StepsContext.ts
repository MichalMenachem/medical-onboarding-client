import React from "react";

interface StepsContextType {
  currentStep: number;
  next: () => void;
  prev: () => void;
}

export const StepsContext = React.createContext<StepsContextType>({
  currentStep: 0,
  next: () => {},
  prev: () => {},
});
