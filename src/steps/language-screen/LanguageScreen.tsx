import React, { useContext } from "react";
import "../../App.css";
import "./language-screen.css";
import { StepsContext } from "../../contexts/StepsContext";
import { Button } from "@material-ui/core";
import { Header } from "../header/Header";
import { PatientContext } from "../../contexts/PatientContext";
import { useState } from "react";
import { DbResults, getLanguages } from "../../DataFetcher";
import { useEffect } from "react";

export const LanguageScreen = () => {
  const stepsContext = useContext(StepsContext);
  const patientContext = useContext(PatientContext);
  const [languages, setLanguages] = useState<DbResults.Language[]>([]);

  useEffect(() => {
    getLanguages().then((result) => {
      setLanguages(result.data);
    });
  }, []);

  return (
    <div className="carousel-item lang-background">
      <Header />
      <p className="standard-text lang-text">Please select your language</p>
      <div className="select-lang">
        {languages.map((language) => {
          return (
            <div className="lang-choice">
              <img
                src={language.iconPath}
                alt={language.name}
                className="lang-icon"
              />
              <Button
                className={
                  patientContext.language === language.name
                    ? "lang-button chosen-lang"
                    : "lang-button"
                }
                variant="contained"
                onClick={() => {
                  patientContext.setLanguage(language.name);
                }}
              >
                {language.name}
              </Button>
            </div>
          );
        })}
      </div>
      <div className="navigation-buttons">
        <Button
          className="lang-button"
          variant="contained"
          onClick={() => stepsContext.prev()}
        >
          Prev
        </Button>
        <Button
          className={
            patientContext.language !== undefined ? "lang-button" : undefined
          }
          disabled={patientContext.language === undefined}
          variant="contained"
          onClick={() => stepsContext.next()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
