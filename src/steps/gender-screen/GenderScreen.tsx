import React, { useContext, useEffect } from "react";
import "../../App.css";
import "./gender-screen.css";
import { StepsContext } from "../../contexts/StepsContext";
import { Button } from "@material-ui/core";
import { Header } from "../header/Header";
import { PatientContext } from "../../contexts/PatientContext";
import { DbResults, getGenders } from "../../DataFetcher";
import { useState } from "react";

export const GenderScreen = () => {
  const stepsContext = useContext(StepsContext);
  const patientContext = useContext(PatientContext);
  const [genders, setGenders] = useState<DbResults.Gender[]>([]);

  useEffect(() => {
    getGenders().then((result) => {
      setGenders(result.data);
    });
  }, []);

  return (
    <div className="carousel-item gender-background">
      <Header />
      <p className="standard-text gender-text">Please select your gender</p>
      <div className="select-gender">
        {genders.map((gender) => {
          return (
            <div className="gender-choice">
              <img
                src={gender.iconPath}
                className="gender-icon"
                alt={gender.name}
              />
              <Button
                variant="contained"
                onClick={() => {
                  patientContext.setGender(gender.name);
                }}
              >
                {gender.name}
              </Button>
            </div>
          );
        })}
      </div>
      <div className="navigation-buttons">
        <Button variant="contained" onClick={() => stepsContext.prev()}>
          Prev
        </Button>
        <Button
          variant="contained"
          onClick={() => stepsContext.next()}
          disabled={patientContext.gender === undefined}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
