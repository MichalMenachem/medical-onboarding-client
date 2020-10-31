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
import { DbResults, getSurgeries, postPatient } from "../../DataFetcher";
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

  const handleFinish = async () => {
    await postPatient({
      age: patientContext.age!,
      gender: patientContext.gender!,
      language: patientContext.language!,
      surgery: patientContext.surgery!,
    });
    stepsContext.next();
  };

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
          variant="contained"
          className="surgery-nav"
          onClick={() => stepsContext.prev()}
        >
          Prev
        </Button>
        <Button
          disabled={patientContext.surgery === undefined}
          variant="contained"
          onClick={handleFinish}
          className={
            patientContext.surgery !== undefined ? "surgery-nav" : undefined
          }
        >
          Finish
        </Button>
      </div>
    </div>
  );
};
