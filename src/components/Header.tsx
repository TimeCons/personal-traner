import React from "react";
import { useAppStore, Screen } from "../zustand/AppStore";
import BackArrow from "../assets/back-arrow";

interface HeaderProps {
  title: string;
  fromScreen: Screen;
}

export default function Header({ title, fromScreen }: HeaderProps) {
  const { setScreen } = useAppStore();
  return (
    <div className="header">
      <div
        className="back-button"
        onClick={() => {
          switch (fromScreen) {
            case Screen.coachingOnline:
              setScreen(Screen.linkTree);
              break;
            default:
              setScreen(Screen.linkTree);
              break;
          }
        }}
      >
        <BackArrow />
      </div>
      <h1 className="page-title">{title}</h1>
    </div>
  );
}
