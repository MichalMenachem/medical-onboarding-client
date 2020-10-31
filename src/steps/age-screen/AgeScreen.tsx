import React, { useContext, useEffect, useState } from "react";
import "../../App.css";
import "./age-screen.css";
import { StepsContext } from "../../contexts/StepsContext";
import { Button } from "@material-ui/core";
import { Header } from "../header/Header";
import { PatientContext } from "../../contexts/PatientContext";
import { DbResults, getAges } from "../../DataFetcher";

export const AgeScreen = () => {
  const stepsContext = useContext(StepsContext);
  const patientContext = useContext(PatientContext);
  const [ages, setAges] = useState<DbResults.Age[]>([]);

  useEffect(() => {
    getAges().then((result) => {
      const sortedByMin = result.data.sort(
        (age1, age2) => parseInt(age1.min) - parseInt(age2.min)
      );
      setAges(sortedByMin);
    });
  }, []);

  return (
    <div className="carousel-item age-background">
      <Header />
      <p className="standard-text age-text">Please select your age</p>
      <div className="select-age">
        {ages.map((age) => {
          return (
            <div className="age-choice">
              <img src={age.iconPath} alt={age.range} className="age-icon" />
              <Button
                variant="contained"
                onClick={() => {
                  patientContext.setAge(age.range);
                }}
              >
                {age.range}
              </Button>
            </div>
          );
        })}
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
