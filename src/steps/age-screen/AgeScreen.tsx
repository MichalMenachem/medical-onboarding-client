import React, { useContext } from "react";
import "../../App.css";
import "./age-screen.css";
import { StepsContext } from "../../contexts/StepsContext";
import { Button } from "@material-ui/core";
import { Header } from "../header/Header";
import { PatientContext } from "../../contexts/PatientContext";

export const AgeScreen = () => {
  const stepsContext = useContext(StepsContext);
  const patientContext = useContext(PatientContext);

  return (
    <div className="carousel-item age-background">
      <Header />
      <p className="standard-text age-text">Please select your age</p>
      <div className="select-age">
        <div className="age-choice">
          <img
            src="./assets/age/small-plant.png"
            alt="small"
            className="age-icon"
          />
          <Button
            variant="contained"
            onClick={() => {
              patientContext.setAge("0-8");
            }}
          >
            0-8
          </Button>
        </div>
        <div className="age-choice">
          <img
            src="./assets/age/medium-plant.png"
            alt="medium"
            className="age-icon"
          />
          <Button
            variant="contained"
            onClick={() => {
              patientContext.setAge("8-18");
            }}
          >
            8-18
          </Button>
        </div>
        <div className="age-choice">
          <img
            src="./assets/age/large-plant.png"
            alt="large"
            className="age-icon"
          />
          <Button
            variant="contained"
            onClick={() => {
              patientContext.setAge("18+");
            }}
          >
            18+
          </Button>
        </div>
      </div>
      <div className="navigation-buttons">
        <Button
          className="nav-button"
          variant="contained"
          onClick={() => stepsContext.prev()}
        >
          Prev
        </Button>
        <Button
          className="nav-button"
          variant="contained"
          onClick={() => stepsContext.next()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
