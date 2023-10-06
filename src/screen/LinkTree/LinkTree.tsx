import { useAppStore, Screen } from "../../zustand/AppStore";
import "./LinkTree.css";

const tumbnail = require("../../assets/martina-lippi-thumb.jpeg");

export default function LinkTree() {
  const { setScreen } = useAppStore();

  return (
    <div className="lt-wrapper">
      <div className="lt-container">
        <img
          className="lt-image"
          src={tumbnail}
          alt="Martina Lippi pt - thumbnail"
          width={100}
          height={100}
          style={{ borderRadius: 50 }}
        />
        <h1 className="main-title" style={{marginBottom:4}}>Martina Lippi</h1>
        <h1 className="main-title">Fitness Coach</h1>
        <button
          onClick={() => {
            setScreen(Screen.about);
          }}
          className="lt-button"
        >
          Chi Sono
        </button>
        <button
          onClick={() => {
            setScreen(Screen.coachingOnline);
          }}
          className="lt-button"
        >
          Coaching Online
        </button>
        <button
          onClick={() => {
            setScreen(Screen.personalTrainer);
          }}
          className="lt-button"
        >
          Personal Trainer
        </button>
        <button
          onClick={() => {
            setScreen(Screen.collaborazioni);
          }}
          className="lt-button"
        >
          Collaborazioni
        </button>
      </div>
    </div>
  );
}
