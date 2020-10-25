import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import "../App.css";
import { StepsContext } from "../contexts/StepsContext";
import "./landing-screen.css";

export const LandingScreen = () => {
  const stepsContext = useContext(StepsContext);

  return (
    <div className="carousel-item">
      <p className="welcome-text">
        Hi there!
        <br />
        <br />
        Click the start button below to begin building your personalized patient
        profile
      </p>
      <img className="welcome-image" src="/hospital-staff.png" />
      <Button
        className="start-button"
        variant="contained"
        color="secondary"
        onClick={() => stepsContext.next()}
      >
        START
      </Button>
    </div>
  );
};
