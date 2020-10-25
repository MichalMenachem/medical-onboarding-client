import React from "react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { LandingScreen } from "./steps/LandingScreen";

function App() {
  return (
    <div className="App">
      <Carousel
        axis="vertical"
        showArrows={false}
        showThumbs={false}
        transitionTime={400}
        swipeable={true}
        showStatus={false}
        dynamicHeight={false}
      >
        <div className="carousel-item">cool</div>
        <div className="carousel-item">cool</div>
        <div className="carousel-item">cool</div>
        <LandingScreen />
      </Carousel>
    </div>
  );
}

export default App;
