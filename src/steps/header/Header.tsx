import React, { useContext } from "react";
import { StepsContext } from "../../contexts/StepsContext";
import "./header.css";

export const Header = () => {
  const stepsContext = useContext(StepsContext);

  return (
    <span className="header-text">step {stepsContext.currentStep} of 4</span>
  );
};
