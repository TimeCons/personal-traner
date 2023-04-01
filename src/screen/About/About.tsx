import React from "react";
import BackArrow from "../../assets/back-arrow";
import Header from "../../components/Header";
import PricingTab from "../../components/PricingTab";
import { coachingOnline } from "../../data/coaching_online";
import { Screen, useAppStore } from "../../zustand/AppStore";
import "./About.css";
const aboutImage = require("../../assets/martina-lippi-about.jpeg");

export default function About() {
  const { setScreen } = useAppStore();

  return (
    <div className="single-page about-page">
      <Header title="Chi Sono" fromScreen={Screen.coachingOnline} />
      <div className="post">
        <img
          className="about-image"
          src={aboutImage}
          alt="Martina Lippi pt - thumbnail"
          width={"100%"}
        />

        <h2>CHI SONO</h2>
        <p>
          Sono Martina Lippi laureata in Scienze Motorie laurea triennale e
          laurea magistrale.
        </p>

        <p>
          Inizio a lavorare subito dopo la laurea triennale approcciandomi al
          mondo del personal trainering in studi personal dedicandomi
          principalmente all'<b>allenamento funzionale e posturale</b>. Affianco
          inoltre la parte sportiva come <b>preparatrice atletica</b> nel gioco
          del tennis e alcune esperienze nelle scuole con i bambini.
        </p>
        <p>
          Grazie a vari corsi ed esperienza sul campo inizio a lavorare nelle
          palestre dove mi dedico esclusivamente al servizio di personal
          trainer.
        </p>
        <p>
          La mia MISSION è portare sempre più persone verso uno stile di vita
          sano che gli permetta di stare bene con se stessi e di raggiungere i
          propri obiettivi!
        </p>
      </div>
    </div>
  );
}
