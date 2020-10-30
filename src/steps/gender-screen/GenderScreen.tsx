import React, { useContext } from "react";
import "../../App.css";
import "./gender-screen.css";
import { StepsContext } from "../../contexts/StepsContext";
import { Button } from "@material-ui/core";
import { Header } from "../header/Header";
import { PatientContext } from "../../contexts/PatientContext";

export const GenderScreen = () => {
  const stepsContext = useContext(StepsContext);
  const patientContext = useContext(PatientContext);

  return (
    <div className="carousel-item gender-background">
      <Header />
      <p className="standard-text gender-text">Please select your gender</p>
      <div className="select-gender">
        <div className="gender-choice">
          <img
            src="./assets/gender/female-gender.svg"
            className="gender-icon"
            alt="female"
          />
          <Button
            variant="contained"
            onClick={() => {
              patientContext.setGender("Female");
            }}
          >
            FEMALE
          </Button>
        </div>
        <div className="gender-choice">
          <img
            src="./assets/gender/male-gender.svg"
            className="gender-icon"
            alt="male"
          />
          <Button
            variant="contained"
            onClick={() => {
              patientContext.setGender("Male");
            }}
          >
            MALE
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
