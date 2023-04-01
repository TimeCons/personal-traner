import Header from "../../components/Header";
import { Screen, useAppStore } from "../../zustand/AppStore";
import "./Collaborators.css";
const lorenzoTaniImage = require("../../assets/lorenzo-tani-fisioterapista.jpeg");

export default function Collaborators() {
  return (
    <div className="single-page about-page">
      <Header title="Collaboratori" fromScreen={Screen.coachingOnline} />
      <div className="post">
        <img
          src={lorenzoTaniImage}
          alt="Lorenzo Tani - Fisioterapista"
          width={"60%"}
          style={{ margin: "auto", display: "block" }}
        />

        <h3 style={{ textAlign: "center" }}>Lorenzo Tani</h3>
        <p>
          Il Dott.Lorenzo Tani si laurea nell'aprile 2012 in Fisioterapia presso
          la <u>facoltà di medicina e chirurgia di Firenze</u>.
        </p>

        <p>
          Nel giugno 2014 conclude il master in Fisioterapia sportiva presso
          l'università di Pisa.
        </p>
        <p>
          Dal 2012 al 2021 collabora con l'<u>ACF Fiorentina</u> come
          fisioterapista delle principali squadre del settore giovanile
        </p>
        <p>
          Dal 2014 è titolare dello studio professionale Fisioterapia Calenzano.
        </p>
        <p>
          TUTTI I MIEI CLIENTI AVRANNO UN{" "}
          <b>10% DI SCONTO SU TUTTI I TRATTAMENTI</b> PRESSO IL CENTRO DI
          FISIOTERAPIA CALENZANO ATTRAVERSO UN CODICE CHE FORNIRÒ AL MOMENTO
          DELL'ACQUISTO DI UN MIO SERVIZIO.
        </p>
      </div>
    </div>
  );
}
