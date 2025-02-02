import "./App.css";
import React from "react";
import LinkTree from "./screen/LinkTree/LinkTree";
import CoachOnline from "./screen/CoachOnline/CoachOnline";
import { Screen, useAppStore } from "./zustand/AppStore";
import PersonalTrainer from "./screen/PersonalTrainer/PersonalTrainer";
import About from "./screen/About/About";
import Collaborators from "./screen/Collaborators/Collaborators";
import Sheets from "./screen/Sheets/Sheets";

function App() {
  const { screen } = useAppStore();

  const ScreenNavigation = () => {
    switch (screen) {
      case Screen.linkTree:
        return <LinkTree />;
      case Screen.coachingOnline:
        return <CoachOnline />;
      case Screen.personalTrainer:
        return <PersonalTrainer />;
      case Screen.about:
        return <About />;
      case Screen.collaborazioni:
        return <Collaborators />;
      case Screen.sheets:
        return <Sheets />;

      default:
        return <LinkTree />;
    }
  };

  return (
    <div className="wrapper">
      <div className="bg-shape">
        <div className="App">
          <ScreenNavigation />
        </div>
      </div>
    </div>
  );
}

export default App;
