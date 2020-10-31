import React from "react";
import "./final-screen.css";
import "../../App.css";

export const FinalScreen = () => {
  return (
    <div className="carousel-item final-background">
      <p className="standard-text">
        All done!
        <br />
        <br />
        Thank you for taking the time to fill out this questionnaire
      </p>
      <img
        src="./assets/final-screen/doctor-finish.png"
        alt="doctor"
        className="final-image"
      />
    </div>
  );
};
