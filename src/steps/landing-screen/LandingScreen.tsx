import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import "../../App.css";
import { StepsContext } from "../../contexts/StepsContext";
import "./landing-screen.css";

export const LandingScreen = () => {
  const stepsContext = useContext(StepsContext);

  return (
    <div className="carousel-item landing-color">
      <p className="standard-text">
        Hi there!
        <br />
        <br />
        Click the start button below to begin building your personalized patient
        profile
      </p>
      <img src="/hospital-staff.png" />
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
