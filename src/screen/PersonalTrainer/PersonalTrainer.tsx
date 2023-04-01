import React, { useRef } from "react";
import Header from "../../components/Header";
import PricingTab from "../../components/PricingTab";
import { personalTrainer } from "../../data/personal_trainer";
import { Screen, useAppStore } from "../../zustand/AppStore";
import ActionSheet from "actionsheet-react";

export default function PersonalTrainer() {
  const { setScreen } = useAppStore();
  const [selectedService, setSelectedService] = React.useState("");
  const [message, setMessage] = React.useState("");

  const ref = useRef();

  const handleOpen = (service: string) => {
    setSelectedService(service);
    //create string with service to send to whatsapp
    const message = `Ciao Martina! Ti scrivo dal tuo portale web. Vorrei sapere di più sul servizio di *personal trainer ${service}*!`;
    setMessage(message);

    //@ts-ignore
    ref.current.open();
  };

  const handleClose = () => {
    //@ts-ignore
    ref.current.close();
  };

  return (
    <div className="single-page">
      <ActionSheet ref={ref}>
        <div className="action-sheet-container">
          <div>
            <a href={`https://wa.me/393485000000?text=${message}`}>
              Contatta via Whatsapp!
            </a>
          </div>
          <div>
            {" "}
            <a
              href={`mailto:maritna@dfdf.com?subject=Contatto da sito coaching online&body=${message}`}
            >
              Contatta via Email!
            </a>
          </div>
          <div>
            {" "}
            <a href="tel:3485000000">Contatta via telefono!</a>
          </div>
        </div>
      </ActionSheet>
      <Header title="Personal Trainer" fromScreen={Screen.personalTrainer} />
      <div className="post">
        <h2>CHE COS’E’?</h2>
        <p>
          La seduta di Personal Training (1h) è un momento in cui vi aiuterò,
          tramite il mio supporto durante l’allenamento, ad insegnarvi,
          spingervi oltre i vostri limiti, farvi divertire e progredire verso il
          raggiungimento dei vostri obiettivi che non sembreranno più così
          lontani!
        </p>
        <p>In tutti i pacchetti è incluso:</p>
        <ul>
          <li>anamnesi iniziale</li>
          <li>programma personalizzato</li>
          <li>report bisettimanale</li>
          <li>live check mensile</li>
        </ul>
        <p>
          Lezione singola <b>45€</b>{" "}
        </p>
      </div>
      <div className="pricing">
        <h2 style={{ textAlign: "center" }}>Piani Mensili</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PricingTab
            rowed
            title={personalTrainer[0].title}
            description={personalTrainer[0].description}
            price={personalTrainer[0].price}
            voices={personalTrainer[0].voices}
            nolimit
            onClick={() => {
              handleOpen("piano mensile - " + personalTrainer[0].title);
            }}
          />
          <PricingTab
            rowed
            title={personalTrainer[1].title}
            description={personalTrainer[1].description}
            price={personalTrainer[1].price}
            voices={personalTrainer[1].voices}
            nolimit
            onClick={() => {
              handleOpen("piano mensile - " + personalTrainer[1].title);
            }}
          />
        </div>
        <h2 style={{ textAlign: "center" }}>Piani Trimestrali</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PricingTab
            rowed
            title={personalTrainer[2].title}
            description={personalTrainer[2].description}
            price={personalTrainer[2].price}
            voices={personalTrainer[2].voices}
            nolimit
            onClick={() => {
              handleOpen("piano trimestrale - " + personalTrainer[2].title);
            }}
          />
          <PricingTab
            rowed
            title={personalTrainer[3].title}
            description={personalTrainer[3].description}
            price={personalTrainer[3].price}
            voices={personalTrainer[3].voices}
            nolimit
            onClick={() => {
              handleOpen("piano trimestrale - " + personalTrainer[3].title);
            }}
          />
        </div>
        <h2 style={{ textAlign: "center" }}>Piani Semestrali</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PricingTab
            rowed
            title={personalTrainer[4].title}
            description={personalTrainer[4].description}
            price={personalTrainer[4].price}
            voices={personalTrainer[4].voices}
            nolimit
            onClick={() => {
              handleOpen("piano semestrale - " + personalTrainer[4].title);
            }}
          />
          <PricingTab
            rowed
            title={personalTrainer[5].title}
            description={personalTrainer[5].description}
            price={personalTrainer[5].price}
            voices={personalTrainer[5].voices}
            nolimit
            onClick={() => {
              handleOpen("piano semestrale - " + personalTrainer[5].title);
            }}
          />
        </div>
      </div>
    </div>
  );
}
