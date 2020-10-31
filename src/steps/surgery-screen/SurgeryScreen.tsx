import React, { useContext } from "react";
import "../../App.css";
import "./surgery-screen.css";
import { StepsContext } from "../../contexts/StepsContext";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Header } from "../header/Header";
import { PatientContext } from "../../contexts/PatientContext";
import { DbResults, getSurgeries } from "../../DataFetcher";
import { useState } from "react";
import { useEffect } from "react";

export const SurgeryScreen = () => {
  const stepsContext = useContext(StepsContext);
  const patientContext = useContext(PatientContext);
  const [surgeries, setSurgeries] = useState<DbResults.Surgery[]>([]);

  useEffect(() => {
    getSurgeries().then((result) => {
      setSurgeries(result.data);
    });
  }, []);

  return (
    <div className="carousel-item surgery-background">
      <Header />
      <p className="standard-text surgery-text">Please select your surgery</p>
      <img src="./assets/surgery/surgery.png" alt="surgery" />

      <FormControl className="surgery-form">
        <InputLabel>Select Surgery</InputLabel>
        <Select
          value={patientContext.surgery}
          onChange={(event) =>
            patientContext.setSurgery(event.target.value as string)
          }
        >
          {surgeries.map((surgery) => (
            <MenuItem value={surgery.name}>{surgery.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
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
          Finish
        </Button>
      </div>
    </div>
  );
};
