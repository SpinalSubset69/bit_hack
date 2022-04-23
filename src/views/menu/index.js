import React from "react";
import ModeSelectorComponent from "./components/modeSelector";

export default function MenuComponent() {
  return (
    <div className="menu-wrapper">
      <div className="main-card-wrapper animate__animated animate__fadeInDown">
        <div className="main-card-content">
          <span className="main-card-title">BitHack</span>
          <div>
            <ModeSelectorComponent />
          </div>
        </div>
        <div className="main-card-img-side"></div>
      </div>
    </div>
  );
}
