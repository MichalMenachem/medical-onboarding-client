import React, { useContext } from "react";
import "../../App.css";
import "./gender-screen.css";
import { StepsContext } from "../../contexts/StepsContext";
import { Button } from "@material-ui/core";
import { Header } from "../header/Header";
import { ReactComponent as FemaleGender } from "../../icons/female-gender.svg";
import { ReactComponent as MaleGender } from "../../icons/male-gender.svg";

export const GenderScreen = () => {
  const stepsContext = useContext(StepsContext);

  return (
    <div className="carousel-item background-design">
      <Header />
      <p className="standard-text gender-text">Select your patient's gender</p>
      <div className="select-gender">
        <div className="gender-choice">
          <FemaleGender className="gender-icon" />
          <Button variant="contained">FEMALE</Button>
        </div>
        <div className="gender-choice">
          <MaleGender className="gender-icon" />
          <Button variant="contained">MALE</Button>
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
