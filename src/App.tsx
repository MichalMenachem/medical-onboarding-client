import React, { useState } from "react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { LandingScreen } from "./steps/LandingScreen";
import { StepsContext } from "./contexts/StepsContext";
import { GenderScreen } from "./steps/GenderScreen";

function App() {
  const [curStep, setCurStep] = useState(0);

  return (
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
        >
          <LandingScreen />
          <GenderScreen />
          <div className="carousel-item">cool</div>
          <div className="carousel-item">cool</div>
        </Carousel>
      </div>
    </StepsContext.Provider>
  );
}

export default App;
