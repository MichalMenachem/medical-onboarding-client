import { Button } from "@material-ui/core";
import React from "react";
import "../App.css";

export const LandingScreen = () => {
  return (
    <div className="carousel-item">
      <p>
        Hi there!
        <br />
        Click the start button below to begin building your personalized patient
        profile
      </p>
      <img src="/hospital-staff.png" />
      <Button variant="contained" color="secondary">
        Start
      </Button>
    </div>
  );
};
