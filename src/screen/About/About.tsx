import Header from "../../components/Header";
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
          Ci tengo ad iniziare questa mia presentazione spiegandovi quale è la
          mia <b>MISSION</b>. Sono fermamente convinta che il <b>BENESSERE</b>{" "}
          sia composto da una parte mentale e una fisica, indivisibili l’una
          dall’altra. Quello che mi pongo di fare per le persone, con successo,
          è quindi aiutarle a raggiungere il benessere superando limiti mentali
          e fisici
          <b> TRASFORMANDO</b> il loro corpo!
        </p>
        <p>
          Inizio a lavorare subito dopo la laurea triennale approcciandomi al
          mondo del personal training in studi privati dedicandomi
          principalmente all’allenamento funzionale e posturale. Affianco
          inoltre a queste esperienze la parte sportiva come preparatrice
          atletica.
        </p>
        <p>
          Grazie all’ampliamento della mia formazione e alla crescente
          esperienza sul campo inizio a lavorare nelle palestre dove mi dedico
          esclusivamente al servizio di personal training.
        </p>
        <p>
          Mi piace stare in continuo aggiornamento e migliorarmi sempre per
          crescere professionalmente confrontandomi con i grandi coach del
          settore.
        </p>
      </div>
    </div>
  );
}
