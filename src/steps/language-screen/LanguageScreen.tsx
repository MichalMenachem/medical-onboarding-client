import React, { useContext } from "react";
import "../../App.css";
import "./language-screen.css";
import { StepsContext } from "../../contexts/StepsContext";
import { Button } from "@material-ui/core";
import { Header } from "../header/Header";
import { PatientContext } from "../../contexts/PatientContext";

export const LanguageScreen = () => {
  const stepsContext = useContext(StepsContext);
  const patientContext = useContext(PatientContext);

  return (
    <div className="carousel-item lang-background">
      <Header />
      <p className="standard-text lang-text">
        Please select the required language
      </p>
      <div className="select-lang">
        <div className="lang-choice">
          <img
            src="./assets/language/shalom.png"
            alt="hebrew"
            className="lang-icon"
          />
          <Button
            variant="contained"
            onClick={() => {
              patientContext.setLanguage("Hebrew");
            }}
          >
            Hebrew
          </Button>
        </div>
        <div className="lang-choice">
          <img
            src="./assets/language/hello.png"
            alt="english"
            className="lang-icon"
          />
          <Button
            variant="contained"
            onClick={() => {
              patientContext.setLanguage("English");
            }}
          >
            English
          </Button>
        </div>
        <div className="lang-choice">
          <img
            src="./assets/language/salam.png"
            alt="arabic"
            className="lang-icon"
          />
          <Button
            variant="contained"
            onClick={() => {
              patientContext.setLanguage("Arabic");
            }}
          >
            Arabic
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
