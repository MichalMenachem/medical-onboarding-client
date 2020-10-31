import React, { useState } from "react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { LandingScreen } from "./steps/landing-screen/LandingScreen";
import { StepsContext } from "./contexts/StepsContext";
import { GenderScreen } from "./steps/gender-screen/GenderScreen";
import { PatientContext } from "./contexts/PatientContext";
import { AgeScreen } from "./steps/age-screen/AgeScreen";
import { LanguageScreen } from "./steps/language-screen/LanguageScreen";
import { SurgeryScreen } from "./steps/surgery-screen/SurgeryScreen";
import { FinalScreen } from "./steps/final-screen/FinalScreen";

function App() {
  const [curStep, setCurStep] = useState(0);
  const [gender, setGender] = useState<string | undefined>(undefined);
  const [language, setLanguage] = useState<string | undefined>(undefined);
  const [age, setAge] = useState<string | undefined>(undefined);
  const [surgery, setSurgery] = useState<string | undefined>(undefined);

  return (
    <PatientContext.Provider
      value={{
        gender,
        age,
        language,
        surgery,
        setAge,
        setGender,
        setLanguage,
        setSurgery,
      }}
    >
      <StepsContext.Provider
        value={{
          currentStep: curStep,
          next: () => setCurStep(curStep + 1),
          prev: () => setCurStep(curStep - 1),
        }}
      >
        <div className="App">
          <Carousel
            axis="vertical"
            showArrows={false}
            showThumbs={false}
            transitionTime={400}
            swipeable={false}
            showStatus={false}
            dynamicHeight={false}
            selectedItem={curStep}
            showIndicators={false}
          >
            <LandingScreen />
            <GenderScreen />
            <AgeScreen />
            <LanguageScreen />
            <SurgeryScreen />
            <FinalScreen />
          </Carousel>
        </div>
      </StepsContext.Provider>
    </PatientContext.Provider>
  );
}

export default App;
